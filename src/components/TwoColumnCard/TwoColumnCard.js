import React from "react";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./TwoColumnCard.scss";

const TwoColumnCard = ({ text, cta }) => {
  return (
    <div className="TwoColumnCard">
      <div className="TwoColumnCard__container container">
        <h2 className="TwoColumnCard__header">{text}</h2>
        <ArrowButton
          text="Get an invite"
          color="light"
          size="regular"
          link=""
        />
      </div>
    </div>
  );
};

export default TwoColumnCard;
