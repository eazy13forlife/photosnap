import React from "react";

import ArrowButton from "../ArrowButton/ArrowButton.js";

import "./InfoCard.scss";

const InfoCard = ({
  className,
  theme,
  heading,
  text,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className={`InfoCard InfoCard--${theme} ${className}`}>
      <div className="InfoCard__content">
        <h2 className="InfoCard__heading">{heading}</h2>
        <p className="InfoCard__text">{text}</p>
        <ArrowButton
          text={buttonText}
          link={buttonLink}
          size="regular"
          color={theme === "dark" ? "light" : "dark"}
        />
      </div>
    </div>
  );
};

export default InfoCard;