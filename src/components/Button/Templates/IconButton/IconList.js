import React from "react";
import CloseSvg from "assets/icons/CloseSvg";
import ChatSvg from "assets/icons/ChatSvg";
import CheckedSvg from "assets/icons/CheckedSvg";
import BackSvg from "assets/icons/BackSvg";
import InfoSvg from "assets/icons/InfoSvg";
import UnCheckedSvg from "assets/icons/UnCheckedSvg";

const IconList = {
  icCloseBlack: (props) => <CloseSvg {...props} />,
  propertyChatIcon: (props) => <ChatSvg {...props} />,
  icBackBlack: (props) => <BackSvg {...props} />,
  info: (props) => <InfoSvg {...props} />,
  checked: (props) => <CheckedSvg {...props} />,
  unchecked: (props) => <UnCheckedSvg {...props} />,
};

export default IconList;
