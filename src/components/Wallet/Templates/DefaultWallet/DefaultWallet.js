import React from "react";

import Icon from "@ant-design/icons";
import { WalletSvg } from "assets/Icon/WalletSvg";

import "./DefaultWallet.scss";

const DefaultWallet = (props) => {
  const { item } = props;
  const { header, description } = item || {};
  const WalletIcon = (props) => <Icon component={WalletSvg} {...props} />;

  return (
    <div className="container-wallet">
      <div className="content-wallet">
        <div className="container-title">
          <div className="content-title">{header}</div>
          <div className="content-desc">{description}</div>
        </div>
        <div className="container-icon">
          <WalletIcon />
        </div>
      </div>
    </div>
  );
};

export default DefaultWallet;
