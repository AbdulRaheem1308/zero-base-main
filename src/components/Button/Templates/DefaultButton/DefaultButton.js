import React from "react";
import { Button as AntdButton } from "antd-mobile";
import "./DefaultButton.scss";

const DefaultButton = (props) => {
  const { item } = props;
  const { label = "", children, disabled, className, hasIcon } = item || {};
  const onClick = () => {};
  return (
    <AntdButton
      className={`${className} ${hasIcon ? "fullButtonIcon" : "fullButton"}`}
      disabled={disabled}
      block
      shape="rounded"
      onClick={onClick}
    >
      <div>{label || children}</div>
    </AntdButton>
  );
};

export default DefaultButton;
