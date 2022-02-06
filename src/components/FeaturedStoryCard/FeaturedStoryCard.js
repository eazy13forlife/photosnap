import React, { useState } from "react";

import ArrowButton from "../../components/ArrowButton/ArrowButton.js";
import "./FeaturedStoryCard.scss";

const FeaturedStoryCardStoryCard = ({
  heading,
  date,
  author,
  text,
  backgroundImage,
}) => {
  const [isMobile, setIsMobile] = useState(window.outerWidth <= 368);

  const renderMainContent = () => {
    return (
      <div className="FeaturedStoryCard__container container">
        <div className="FeaturedStoryCard__content">
          <p className="FeaturedStoryCard__last-months">
            Last Months featured story
          </p>
          <header className="FeaturedStoryCard__header">
            <h1 className="FeaturedStoryCard__heading">{heading}</h1>
            <p className="FeaturedStoryCard__subheading">
              {date}
              <span className="FeaturedStoryCard__author">{` by ${author}`}</span>
            </p>
          </header>
          <p className="FeaturedStoryCard__text body-text">{text}</p>
          <ArrowButton
            size="regular"
            text="read the story"
            color="light"
            link="/stories"
          />
        </div>
      </div>
    );
  };

  const value = !isMobile ? (
    <div
      className="FeaturedStoryCard FeaturedStoryCard__image-container"
      style={{
        backgroundImage: `url(${backgroundImage}),linear-gradient(to right,black, grey)`,
      }}
    >
      {renderMainContent()}
    </div>
  ) : (
    <div className="FeaturedStoryCard__mobile">
      <div
        className="FeaturedStoryCard__image-container"
        style={{
          backgroundImage: `url(${backgroundImage}),linear-gradient(to right,black, grey)`,
        }}
      ></div>
      <div className="FeaturedStoryCard__mobile-content-wrapper">
        {renderMainContent()}
      </div>
    </div>
  );

  return value;
};

export default FeaturedStoryCardStoryCard;
