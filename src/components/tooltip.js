import React from "react";
import Icon from "@ant-design/icons";
import { Modal } from "antd-mobile";
import InfoSvg from "../assets/icons/InfoSvg";

const Tooltip = (props) => {
  const InfoIcon = (props) => <Icon component={InfoSvg} {...props} />;
  return (
    <InfoIcon
      onClick={() => {
        Modal.show({
          className: "tooltipMask",
          title: props.title,
          content: props.tooltip,
          showCloseButton: true,
          closeOnMaskClick: true,
          bodyClassName: "tooltipBody",
        });
      }}
    ></InfoIcon>
  );
};

export default Tooltip;
