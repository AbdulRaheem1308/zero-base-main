import React from "react";
import "./QuickActionCard.scss";

import QRPay from "assets/QRPay.svg";

const QuickActionCard = (props) => {
  const { item } = props;
  const { extra = {}, label } = item;
  const { image = "" } = extra;
  let bgImage;

  switch (image) {
    case "QRPay":
      bgImage = QRPay;
      break;
    default:
      bgImage = "";
  }

  return (
    <div className="container-quick">
      <div>
        <div className="quick-img">
          <img src={bgImage} alt="" />
        </div>
        <div className="quick-title">{label}</div>
      </div>
    </div>
  );
};

export default QuickActionCard;
