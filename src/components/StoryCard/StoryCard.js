import React from "react";
import { Link } from "react-router-dom";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./StoryCard.scss";

const StoryCard = ({ title, author, image }) => {
  return (
    <Link className="StoryCard__link">
      <div className="StoryCard">
        <figure className="StoryCard__image-container">
          <img src={image} className="StoryCard__image" />
        </figure>
        <div className="StoryCard__content">
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
    </Link>
  );
};

export default StoryCard;
