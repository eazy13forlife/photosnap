import React from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import images from "../../images/";

import "./index.scss";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <InfoCard
        className="InfoCard__create-and-share"
        theme="dark"
        heading="Create and share your photo stories"
        text="Photosnap is a  platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonLink=""
        buttonText="Get an invite"
      />
      <img
        src={images.createAndShareHomeDesktopJpg}
        className="Image__create-and-share"
      />
      <img
        src={images.beautifulStoriesHomeDesktopJpg}
        className="Image__beautiful-stories"
      />
      <InfoCard
        className="InfoCard__beautiful-stories"
        theme="light"
        heading="Beautiful stories every time"
        text="We provide design templates to ensure your stories look terrific. Easily add photos,text,embed maps and media from other networks. Then share your story with everyone."
        buttonLink="/stories"
        buttonText="View the stories"
      />
    </div>
  );
};

export default Home;
