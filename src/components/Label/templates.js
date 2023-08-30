import React from "react";

import { DefaultLabel } from "./Templates/DefaultLabel";
import { LeftLabel } from "./Templates/LeftLabel";

const TemplateList = {
  "": (props) => <DefaultLabel {...props} />,
  leftLabel: (props) => <LeftLabel {...props} />,
};

export default TemplateList;
