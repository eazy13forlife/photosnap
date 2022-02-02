import React from "react";

import "./FeatureCard.scss";

const FeatureCard = ({ image, heading, text }) => {
  return (
    <div className="FeatureCard">
      <figure className="FeatureCard__image-container">
        <img src={image} alt="" className="FeatureCard__image" />
      </figure>
      <h2 className="FeatureCard__heading">{heading}</h2>
      <p className="FeatureCard__text body-text">{text}</p>
    </div>
  );
};

export default FeatureCard;
