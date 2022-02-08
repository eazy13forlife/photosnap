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
  const [isMobile, setIsMobile] = useState(window.outerWidth <= 368);

  useEffect(() => {
    const resize = (e) => {
      if (e.target.outerWidth <= 368) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const renderMain = () => {
    return (
      <div
        className={`InfoCard--${theme} ${
          !hasBorder ? `InfoCard--no-border ${className}` : null
        }`}
      >
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
    );
  };

  if (!hasBorder) {
    return renderMain();
  } else {
    return (
      <ContentBorder
        side={!isMobile ? "left" : "top"}
        horizontalPadding={isMobile ? "2" : "8"}
        verticalPadding={isMobile ? "7.5" : "10"}
        bgColor="black"
        className={className}
      >
        {renderMain()}
      </ContentBorder>
    );
  }
};

export default InfoCard;
