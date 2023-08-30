import React from "react";
import JomPay from "assets/JomPay.svg";
import "./FavouriteCard.scss";

const FavouriteCard = (props) => {
  const { item } = props;
  const { header = "", description = "", label = "" } = item || {};

  return (
    <div className="isList">
      <div className="container-list">
        <div className="column-1">
          <div className="container-fav">
            <div className="round-image">
              <img src={JomPay} alt="" className="round-image" />
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="header-row">{header}</div>
          <div className="description-row">{description}</div>
          <div className="label-row">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
