import React from "react";

import ArrowButton from "../../components/ArrowButton/ArrowButton.js";
import "./FeaturedStoryCard.scss";

const FeaturedStoryCardStoryCard = ({
  heading,
  date,
  author,
  text,
  backgroundImage,
}) => {
  return (
    <div
      className="FeaturedStoryCard"
      style={{
        backgroundImage: `url(${backgroundImage}),linear-gradient(to right,black, grey)`,
      }}
    >
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
          <p className="FeaturedStoryCard__text">{text}</p>
          <ArrowButton
            size="regular"
            text="read the story"
            color="light"
            link="/stories"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedStoryCardStoryCard;
