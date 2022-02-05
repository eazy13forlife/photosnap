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

  const renderMainContent = () => {
    return (
      <div
        className={`${
          !hasBorder ? "InfoCard--no-border" : "InfoCard"
        } InfoCard--${theme} ${!hasBorder ? className : null}`}
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
    return renderMainContent();
  } else {
    return (
      <ContentBorder
        side={!isMobile ? "left" : "top"}
        horizontalPadding={isMobile ? "2" : "8"}
        verticalPadding={isMobile ? "10" : "10"}
        bgColor="black"
        className={className}
      >
        {renderMainContent()}
      </ContentBorder>
    );
  }
};

export default InfoCard;
