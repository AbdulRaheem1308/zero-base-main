import React from "react";

import ImageDefault from "./imageDefault";
import ImagePressable from "./imagePressable";

const TemplateList = {
    pressableImage: (props) => <ImagePressable {...props} />,
    "": (props) => <ImageDefault {...props} />,
};

export default TemplateList;
