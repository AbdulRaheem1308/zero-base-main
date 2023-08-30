import React from "react";
import { Block } from "components/Fieldset/Templates/Block";
import "./ScreenLayout.scss";

const ScreenLayout = (props) => (
  <div className="container">
    <div className="content">
      <Block {...props} />
    </div>
  </div>
);

export default ScreenLayout;
