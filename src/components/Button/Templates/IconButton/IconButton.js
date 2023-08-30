import React from "react";
import Icon from "@ant-design/icons";
import IconList from "./IconList";

const IconButton = (props) => {
  const { item } = props;
  const { value = "" } = item || {};

  const onClick = () => {};
  return <Icon component={IconList[value]} {...props} onClick={onClick} />;
};

export default IconButton;
