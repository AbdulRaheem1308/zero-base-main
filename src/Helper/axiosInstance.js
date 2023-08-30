import axios from "axios";
import { METHOD_GET, METHOD_POST, TIMEOUT, TOKEN_TYPE_M2U, OVERSEAS_ENDPOINT_V1, BAKONG_ENDPOINT } from '../constants/api'

let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-APP-PLATFORM": "android", ///Platform.OS.toUpperCase(),
    "X-APP-VERSION": "0.9.13",
    "X-APP-ENVIRONMENT": "",
};

const instance = axios.create({
    baseURL: 'https://uat-maya.maybank.com.my/',
    timeout: 60000,
    headers
});

const service = (args) => (authToken) => {
    console.log("APIManager", args);

    const defaultVal = {
        url: "",
        data: {},
        reqType: null,
        tokenType: null,
        timeout: TIMEOUT,
        promptError: true,
        showPreloader: true,
        secondTokenType: "",
        isMultipart: false,
    };
    let obj = { ...defaultVal, ...args };
    let {
        url,
        data,
        withToken,
        withSecondaryToken,
        reqType,
        tokenType,
        timeout,
        promptError,
        showPreloader,
        secondTokenType,
        isMultipart,
        responseType,
        contentType,
        context,
    } = obj;

    // if (authToken) {
    headers.authorization = `bearer ${authToken}`;
    // }


    let axiosObj;
    let config = {
        method: reqType,
        headers,
        timeout,
        _withToken: withToken || tokenType,
        responseType: responseType ? responseType : null,
        networkRetryOption: 3,
        retryFailedThreshold: 60000,
        isRetry: false,
        retryErrorWait: 0,
    };

    console.log(config, 'figgggggg')



    return new Promise((resolve, reject) => {
        switch (reqType) {
            case METHOD_GET:
                axiosObj = axios.get(url, config);
                break;
            case METHOD_POST:
                axiosObj = axios.post(url, data, config);
                break;
            default:
                axiosObj = axios.post(url, data, config);
        }

        axiosObj
            .then((response) => {
                resolve(response);
            })
            .catch(async (error) => {
                reject(error);
            })

    })


}

const APIManager = {
    service
}

export default APIManager