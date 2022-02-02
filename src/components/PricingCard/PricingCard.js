import React from "react";

import "./PricingCard.scss";
const PricingCard = ({ theme, header, text, priceAndLength, highlight }) => {
  console.log(priceAndLength);
  const priceAndLengthArray = priceAndLength.split("/");
  console.log(priceAndLengthArray);
  const [price, length] = priceAndLengthArray;
  return (
    <div
      className={`PricingCard PricingCard--${theme} ${
        highlight ? "PricingCard--highlight" : ""
      }`}
    >
      <h3 className="PricingCard__header">{header}</h3>
      <p className="body-text">{text}</p>
      <div className="PricingCard__price-per">
        <p className="PricingCard__price">{`$${price}`}</p>
        <span className="body-text">{`per ${length}`}</span>
      </div>
      <button
        className={`primary-button ${
          theme === "light" ? "primary-button--dark" : "primary-button--light"
        }`}
      >
        Pick plan
      </button>
    </div>
  );
};

export default PricingCard;
