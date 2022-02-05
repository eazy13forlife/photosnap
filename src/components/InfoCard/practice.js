/*
import React, { useState, useEffect } from "react";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import ContentBorder from "../ContentBorder/ContentBorder.js";

import "./InfoCard.scss";

const InfoCard = ({
  className,
  theme,
  heading,
  text,
  buttonText,
  buttonLink,
  hasBorder,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //from the onset, check users screen width, so we know if mobile or not
    if (window.outerWidth <= 368) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const renderParentBorderClass = () => {
    if (!hasBorder) {
      return "InfoCard--no-border";
    }

    if (isMobile) {
      return "parent-top-border";
    } else {
      return "parent-left-border";
    }
  };

  const renderContainerBorderClass = () => {
    if (!hasBorder) {
      return "";
    }

    if (isMobile) {
      return "top-border-container";
    } else {
      return "left-border-container";
    }
  };

  return (
    <div
      className={`InfoCard InfoCard--${theme} ${className} ${renderParentBorderClass()} `}
    >
      <div className={`${renderContainerBorderClass()}`}>
        <div className="InfoCard__content">
          <h2 className="InfoCard__heading">{heading}</h2>
          <p className="body-text">{text}</p>
          {buttonText ? (
            <ArrowButton
              text={buttonText}
              link={buttonLink}
              size="regular"
              color={theme === "dark" ? "light" : "dark"}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
*/
