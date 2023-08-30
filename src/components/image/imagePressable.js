import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { getStyle } from "../tailwind";
import { getImage } from "./imageList";

const ImagePressable = (props) => {
    //Access to main props
    //Injected at runtime
    const { item, managedCallback } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value = "", theme = "", extra = {} } = item;

    const onPress = () => {
        managedCallback({ item });
    };

    //Access to all props that introduced in element.
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={getStyle(extra?.theme?.container)}
        >
            <Image source={getImage(value) ?? null} style={getStyle(extra?.theme?.image)} />
        </TouchableOpacity>
    );
};

export default ImagePressable;
