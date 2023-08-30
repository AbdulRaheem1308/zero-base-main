import React from "react";
import Icon from "@ant-design/icons";

import { BackSvg } from "assets/Icon/BackSvg";
import { CloseSvg } from "assets/Icon/CloseSvg";
import { ChatSvg } from "assets/Icon/ChatSvg";

import "./Header.scss";

const DefaultHeader = (props) => {
  const BackIcon = (props) => <Icon component={BackSvg} {...props} />;
  const CloseIcon = (props) => <Icon component={CloseSvg} {...props} />;
  const ChatIcon = (props) => <Icon component={ChatSvg} {...props} />;

  const { item } = props;
  const { label = "", extra = {} } = item;
  const { isBack = true, isClose = true, isChat = true } = extra;

  console.log("Header", isBack);
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isBack ? <BackIcon /> : <></>}
        <div className="headerTitle">
          {label.length > 0 ? label : "Insert label here"}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "24px" }}>
            {isChat ? <ChatIcon /> : <></>}
          </div>
          {isClose ? <CloseIcon /> : <></>}
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
