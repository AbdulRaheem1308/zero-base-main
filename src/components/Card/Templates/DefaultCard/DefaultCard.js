import React from "react";
import { DefaultBlock as Block } from "components/Block/Templates/DefaultBlock";
import { Card, Toast } from "antd-mobile";

import "./DefaultCard.scss";

const DefaultCard = (props) => {
  const { item } = props;
  const { header, description, bgImage = "" } = item || {};

  const onClick = () => {
    Toast.show("ASNB");
  };

  return (
    <Block childrenClassName="cardBlock">
      <Card
        className="CardContainer"
        onClick={onClick}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <div className="CardHeader">{header}</div>
          <div className="CardContent">{description}</div>
        </div>
      </Card>
    </Block>
  );
};

export default DefaultCard;
