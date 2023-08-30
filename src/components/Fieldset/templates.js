import React from "react";

import { DefaultFieldset } from "./Templates/DefaultFieldset";
import { HeaderFieldset } from "./Templates/HeaderFieldset";
import { Block } from "./Templates/Block";
import { ScreenContainer } from "./Templates/ScreenContainer";
import { ScreenLayout } from "./Templates/ScreenLayout";

const TemplateList = {
  "": (props) => <DefaultFieldset {...props} />,
  block: (props) => <Block {...props} />,
  header: (props) => <HeaderFieldset {...props} />,
  screenLayout: (props) => <ScreenLayout {...props} />,
  screenContainer: (props) => <ScreenContainer {...props} />,
};

export default TemplateList;
