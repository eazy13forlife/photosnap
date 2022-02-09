import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import StoryCard from "../../components/StoryCard/StoryCard.js";
import FeatureCard from "../../components/FeatureCard/FeatureCard.js";
import Footer from "../../components/Footer/Footer.js";

import images from "../../images/";

import "./index.scss";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.outerWidth <= 450);

  useEffect(() => {
    const resize = (e) => {
      console.log("hey");
      if (e.target.outerWidth <= 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="Home">
      <Header />
      <section className="two-grid">
        <InfoCard
          className="two-grid__content"
          theme="dark"
          heading="Create and share your photo stories"
          text="Photosnap is a  platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          buttonLink=""
          buttonText="Get an invite"
          hasBorder={true}
          isMobile={isMobile}
        />

        <picture>
          <source
            media="(max-width:40.625em)"
            srcSet={images.createAndShareHomeMobileJpg}
          />
          <source
            media="(max-width:50em)"
            srcSet={images.createAndShareHomeTabletJpg}
          />
          <img
            src={images.createAndShareHomeDesktopJpg}
            alt="man looking out at mountains with a camera in his hand"
          />
        </picture>
      </section>

      <section className="two-grid">
        <picture>
          <source
            media="(max-width:40.625em)"
            srcSet={images.beautifulStoriesHomeMobileJpg}
          />
          <source
            media="(max-width:50em)"
            srcSet={images.beautifulStoriesHomeTabletJpg}
          />
          <img
            src={images.beautifulStoriesHomeDesktopJpg}
            alt="laptop on organized table"
          />
        </picture>
        <InfoCard
          className="two-grid__content"
          theme="light"
          heading="Beautiful stories every time"
          text="We provide design templates to ensure your stories look terrific. Easily add photos,text,embed maps and media from other networks. Then share your story with everyone."
          buttonLink="/stories"
          buttonText="View the stories"
          isMobile={isMobile}
        />
      </section>

      <section className="two-grid">
        <InfoCard
          className="two-grid__content"
          theme="light"
          heading="Designed for everyone"
          text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          buttonLink="/stories"
          buttonText="View the stories"
          isMobile={isMobile}
        />
        <picture>
          <source
            media="(max-width:40.625em)"
            srcSet={images.designedForEveryoneHomeMobileJpg}
          />
          <source
            media="(max-width:50em)"
            srcSet={images.designedForEveryoneHomeTabletJpg}
          />
          <img
            src={images.designedForEveryoneHomeDesktopJpg}
            alt="Man filming"
          />
        </picture>
      </section>

      <section className="Home__stories">
        <StoryCard
          title="The Mountains"
          author="John Appleseed"
          image={{
            desktop: images.mountainsStoriesDesktopJpg,
            mobile: images.mountainsStoriesMobileJpg,
          }}
        />
        <StoryCard
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          image={{
            desktop: images.cityscapesStoriesDesktopJpg,
            mobile: images.cityscapesStoriesMobileJpg,
          }}
        />
        <StoryCard
          title="18 Days Voyage"
          author="Alexei Borodin"
          image={{
            desktop: images.eighteenDaysVoyageStoriesDesktopJpg,
            mobile: images.eighteenDaysVoyageStoriesMobileJpg,
          }}
        />
        <StoryCard
          title="Architecturals"
          author="Samantha Brooke"
          image={{
            desktop: images.architecturalsStoriesDesktopJpg,
            mobile: images.architecturalsStoriesMobileJpg,
          }}
        />
      </section>

      <section className="features">
        <div className="features__grid container">
          <FeatureCard
            image={images.responsiveFeaturesDesktopSvg}
            heading="100% Responsive"
            text="No matter the device you're on, our site is fully responsive and stories look beautiful on any screen."
          />
          <FeatureCard
            image={images.noLimitFeaturesDesktopSvg}
            heading="No Photo Upload Limit"
            text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          />
          <FeatureCard
            image={images.embedFeaturesDesktopSvg}
            heading="Available to embed"
            text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
