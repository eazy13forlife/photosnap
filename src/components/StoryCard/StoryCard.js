import React from "react";
import { Link } from "react-router-dom";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./StoryCard.scss";

const StoryCard = ({ title, author, image }) => {
  return (
    <Link className="StoryCard__link">
      <div
        className="StoryCard"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="StoryCard__content">
          <header className="StoryCard__header">
            <h1 className="StoryCard__title">{title}</h1>
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
