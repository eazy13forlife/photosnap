import React from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import StoryCard from "../../components/StoryCard/StoryCard.js";
import images from "../../images/";

import "./index.scss";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Home__create-and-share">
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
      </div>
      <div className="Home__beautiful-stories">
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
      <div className="Home__designed-everyone">
        <InfoCard
          className="InfoCard__designed-everyone"
          theme="light"
          heading="Designed for everyone"
          text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          buttonLink="/stories"
          buttonText="View the stories"
        />
        <img
          src={images.designedForEveryoneHomeDesktopJpg}
          className="Image__designed-everyone"
        />
      </div>
      <div className="Home__stories">
        <StoryCard
          title="The Mountains"
          author="John Appleseed"
          image={images.mountainsStoriesDesktopJpg}
        />
        <StoryCard
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          image={images.cityscapesStoriesDesktopJpg}
        />
        <StoryCard
          title="18 Days Voyage"
          author="Alexei Borodin"
          image={images.eighteenDaysVoyageStoriesDesktopJpg}
        />
        <StoryCard
          title="Architecturals"
          author="Samantha Brooke"
          image={images.architecturalsStoriesDesktopJpg}
        />
      </div>
    </div>
  );
};

export default Home;
