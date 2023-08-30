import React from "react";
import { Image } from "react-native";

import { getStyle } from "../tailwind";
import { getImage } from "./imageList";

const ImageDefault = (props) => {
    //Access to main props
    //Injected at runtime
    const { item } = props;

    //Always check to not render with error ;)
    if (item === undefined) return null;

    const { value = "", theme = "" } = item;
    console.log("ImageDefault", getStyle(theme));
    //Access to all props that introduced in element.
    return <Image source={getImage(value) ?? null} resizeMode="contain" style={getStyle(theme)} />;
};

export default ImageDefault;
