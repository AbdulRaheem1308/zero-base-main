import React from "react";

import { DefaultButton } from "./Templates/DefaultButton";
import { IconButton } from "./Templates/IconButton";

const TemplateList = {
  "": (props) => <DefaultButton {...props} />,
  iconButton: (props) => <IconButton {...props} />,
};

export default TemplateList;
