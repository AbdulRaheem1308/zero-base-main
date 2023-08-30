import React from "react";
import Icon from "@ant-design/icons";
import { Modal } from "antd-mobile";
import { InfoSvg } from "assets/Icon/InfoSvg";
import "./DefaultTooltip.scss";

const Tooltip = (props) => {
  const InfoIcon = (props) => <Icon component={InfoSvg} {...props} />;
  return (
    <InfoIcon
      onClick={() => {
        Modal.show({
          className: "tooltipMask",
          title: "Primary source of wealth",
          content: "The main souce of your total assets",
          showCloseButton: true,
          closeOnMaskClick: true,
          bodyClassName: "tooltipBody",
        });
      }}
    ></InfoIcon>
  );
};

export default Tooltip;
