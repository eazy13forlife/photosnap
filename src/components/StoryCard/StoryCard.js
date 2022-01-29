import React from "react";
import { Link } from "react-router-dom";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./StoryCard.scss";

const StoryCard = ({ date, title, author, image }) => {
  return (
    <div className="StoryCard">
      <figure className="StoryCard__image-container">
        <img src={image} className="StoryCard__image" />
      </figure>
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
