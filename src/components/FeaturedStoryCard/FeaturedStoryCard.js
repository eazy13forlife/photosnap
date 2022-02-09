import React, { useState, useEffect } from "react";

import ArrowButton from "../../components/ArrowButton/ArrowButton.js";
import "./FeaturedStoryCard.scss";

const FeaturedStoryCard = ({
  heading,
  date,
  author,
  text,
  backgroundImage,
  isMobile,
}) => {
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
    <div className="FeaturedStoryCard">
      <picture className="FeaturedStoryCard__image-container">
        <source media="(min-width:48em)" srcSet={backgroundImage.desktop} />
        <source media="(min-width:23.44em)" srcSet={backgroundImage.tablet} />
        <img
          src={backgroundImage.desktop}
          className="FeaturedStoryCard__image"
        />
      </picture>
      {renderMainContent()}
    </div>
  ) : (
    <div className="FeaturedStoryCard__mobile">
      <figure className="FeaturedStoryCard__mobile-image-container">
        <img
          src={backgroundImage.mobile}
          className="FeaturedStoryCard__image"
        />
      </figure>
      <div className="FeaturedStoryCard__mobile-content-wrapper">
        {renderMainContent()}
      </div>
    </div>
  );

  return value;
};

export default FeaturedStoryCard;
