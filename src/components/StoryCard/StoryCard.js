import React from "react";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./StoryCard.scss";

const StoryCard = ({ date, title, author, image }) => {
  return (
    <div className="StoryCard">
      <picture className="StoryCard__image-container">
        <source media="(max-width:23.44em)" srcSet={image.mobile} />
        <img src={image.desktop} className="StoryCard__image" />
      </picture>
      <div className="StoryCard__content">
        <p className="StoryCard__date">{date}</p>
        <header className="StoryCard__header">
          <h2 className="StoryCard__title">{title}</h2>
          <p className="StoryCard__author">{`by ${author}`}</p>
        </header>
        <ArrowButton
          text="Read Story"
          link="/story"
          color="light"
          size="full"
        />
      </div>
    </div>
  );
};

export default StoryCard;
