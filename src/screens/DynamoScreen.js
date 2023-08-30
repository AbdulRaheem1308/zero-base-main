import React, { useState, useRef, useEffect } from 'react'
import axios from "axios";
import {
    FormBuilderV4 as DynamoEngine,
    actionsRunner,
    transformer,
} from "dynamo";
import { renderComponent, validationResolver } from "../components";
import useDynamoHistory from "../Helper/useDynamoHistory"
import _ from "lodash"

import * as services from "../Helper/Services";


function isURL(value) {
    return (
        value?.startsWith("http://") ||
        value?.startsWith("https://") ||
        value?.startsWith("data:image")
    );
}

const DynamoScreen = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [data, setData] = useState({});
    const [items, setItems] = useState(null);
    const [currentJson, setCurrentJson] = useState(null);
    const dynamoRef = useRef(null);

    const [dataStore, setDataStore] = useState({})

    const {
        current: state,
        insertObject: setState,
        updateCurrent,
        getHistory,
        getCurrentBasket,
    } = useDynamoHistory([], "name", 0, false, true);

    useEffect(() => {
        fetchDynamoJson("https://dynamobff.maybanksandbox.com/forms/64e8107c013c34001c1a0fce");
    }, []);

    const fetchDynamoJson = (uri) => {
        axios
            .get(uri)
            .then((res) => {
                setData(res.data?.defaultValues);
                setCurrentJson(res.data);
                setState(res.data);
                return res.data;
            })
            .catch((err) => setShowLoader(false));
    };

    const transforming = (config) => (dataStore) => async (item) => {
        return new Promise(async (resolve, reject) => {
            const { destination = "transforming", source, schema } = config;
            const input = _.get(item, source);
            try {
                const result = await transformer(input, schema);

                resolve({
                    ...item,
                    ..._.set(item, destination, result),
                });
            } catch {
                reject();
            }
        });
    };

    const navigateTo = (config) => (dataStore) => async (item) => {
        return new Promise(async (resolve, reject) => {
            const { destination = "navigateTo", actionURL, schema } = config;
            if (isURL(actionURL)) {
                const result = await fetchDynamoJson(actionURL);

                resolve({
                    ...item,
                    ..._.set(item, destination, result),
                });
            }
            reject("it is failed due to url !!!");
        });
    };

    const fetchAPIData = (config) => (dataStore) => async (item) => {
        console.log(
            `fetchAPIData: ${JSON.stringify(config)} ${JSON.stringify(dataStore)} ${JSON.stringify(
                item
            )}`
        );
        return new Promise(async (resolve, reject) => {
            const { destination = "fetchData", apiParams, actionAPI } = config;

            const apiReqObj = services[actionAPI](apiParams) || null;
            if (apiReqObj) {
                try {
                    const result = await apiReqObj(dataStore?.access_token);
                    dataStore[actionAPI] = result?.data;
                    setDataStore((prevDataStore) => ({ ...prevDataStore, ...dataStore }));
                    resolve({
                        ...item,
                        ..._.set(item, destination, result?.data),
                    });
                } catch (e) {
                    reject(e);
                }
            }
        });
    };

    const managedCallbackOLD = async ({ item }, overrideAction = null) => {
        const action = overrideAction ?? item.action;
        // If has action
        if (action) {
            if (action.actionType === "alert") {
                alert(item.action?.actionText);
                return true;
            } else if (action.actionType === "modal") {
                return true;
            } else if (action.actionType === "handleClose") {
                alert("handleClose. Is Closing");
                return true;
            } else if (action.actionType === "handleMore") {
                alert("handleMore. More Setting Hidden Here");
                return true;
            } else if (action.actionType === "navigateBack") {
                return true;
            } else if (action.actionType === "navigateBackTo") {
                setShowLoader(true);
                return true;
            } else if (action.actionType === "navigateTo") {
                setShowLoader(true);
                try {
                    fetchDynamoJson(action.actionURL);
                } catch (ex) {
                    alert(JSON.stringify(ex));
                }

                return true;
            } else if (action.actionType === "openURL") {
                return true;
            }
        }

        //Get dynamo (form) values
        const formData = await dynamoRef.current.getValues();

        //false means error is there
        //otherwise the data object returns
        if (!formData) return null;

        return true;
    };

    const managedCallback = async ({ item, data = null, validate = true }) => {
        const formData = await dynamoRef.current.getValuesBackground(false);
        updateCurrent({ ...state(), defaultValues: { ...formData }, snapshot: { ...formData } });

        if (item && item.action && typeof item.action === "object") {
            const allLocalFunction = dynamoRef.current.localFunction;
            let polyAction = item.action;
            if (polyAction.actionURL) {
                const { actionURL, actionType } = item.action;
                polyAction = {
                    [actionType]: {
                        actionURL,
                    },
                };
            }
            const result = await actionsRunner(
                polyAction,
                allLocalFunction,
                { "x-item": item, dataStore },
                dataStore
            );
            setDataStore(result?.dataStore);
        }

        return true;
    };

    const getDataStore = () => {
        return {
            cache: getHistory(),
            basket: getCurrentBasket(),
            ...dataStore
        };
    };

    const localFunction = {
        fetchAPIData: fetchAPIData,
        transformer: transforming,
        navigateTo
    }

    return (
        <DynamoEngine
            ref={dynamoRef}
            key={`dynamo-${state()?._id}`}
            name={`dynamo-${state()?._id}`}
            items={state()?.items}
            defaultValues={state()?.defaultValues ?? {}}
            components={renderComponent}
            managedCallback={managedCallback}
            localFunction={localFunction}
            validationResolver={validationResolver}
            dataStore={{
                ...dataStore,
                ...getDataStore(),
            }}
            devMode={false}
        />
    )
}

export default DynamoScreen