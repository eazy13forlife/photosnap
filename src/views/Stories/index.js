import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header.js";
import FeaturedStoryCard from "../../components/FeaturedStoryCard/FeaturedStoryCard.js";
import StoryCard from "../../components/StoryCard/StoryCard.js";
import Footer from "../../components/Footer/Footer.js";
import images from "../../images";
import ArrowButton from "../../components/ArrowButton/ArrowButton.js";
import "./index.scss";

const Stories = () => {
  const [isMobile, setIsMobile] = useState(window.outerWidth <= 368);

  useEffect(() => {
    const getSizing = (e) => {
      if (e.target.outerWidth <= 368) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", getSizing);

    return () => {
      window.removeEventListener("resize", getSizing);
    };
  });

  return (
    <div className="Stories">
      <Header />
      <main className="Stories__main">
        <section className="Featured">
          <FeaturedStoryCard
            heading="Hazy full moon of appalachia"
            date="March 2nd 2020"
            author="John Appleseed"
            text={`The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.`}
            backgroundImage={{
              desktop: images.moonOfAppalaciaStoriesDesktopJpg,
              tablet: images.moonOfAppalaciaStoriesTabletJpg,
              mobile: images.moonOfAppalaciaStoriesMobileJpg,
            }}
            isMobile={isMobile}
          />
        </section>

        <section className="Stories__all">
          <StoryCard
            date="April 16th 2020"
            title="The Mountains"
            author="John Appleseed"
            image={{
              desktop: images.mountainsStoriesDesktopJpg,
              mobile: images.mountainsStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="April 14th 2020"
            title="Sunset Cityscapes"
            author="Benjamin Cruz"
            image={{
              desktop: images.cityscapesStoriesDesktopJpg,
              mobile: images.cityscapesStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="April 11th 2020"
            title="18 days voyage"
            author="Alexei Borodin"
            image={{
              desktop: images.eighteenDaysVoyageStoriesDesktopJpg,
              mobile: images.eighteenDaysVoyageStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="April 9th 2020"
            title="Architecturals"
            author="Samantha Brooke"
            image={{
              desktop: images.architecturalsStoriesDesktopJpg,
              mobile: images.architecturalsStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="April 7th 2020"
            title="World Tour 2019"
            author="Timothy Wagner"
            image={{
              desktop: images.worldTourStoriesDesktopJpg,
              mobile: images.worldTourStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="April 3rd 2020"
            title="Unforseen Corners"
            author="William Malcolm"
            image={{
              desktop: images.unforeseenCornersStoriesDesktopJpg,
              mobile: images.unforeseenCornersStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 29th 2020"
            title="King on Africa: Part II"
            author="Tim Hillenburg"
            image={{
              desktop: images.kingOnAfricaStoriesDesktopJpg,
              mobile: images.kingOnAfricaStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 21st 2020"
            title="The Trip to Nowhere"
            author="Felicia Rourke"
            image={{
              desktop: images.tripToNowhereStoriesDesktopJpg,
              mobile: images.tripToNowhereStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 19th 2020"
            title="Rage of the Sea"
            author="Mohammed Abdul"
            image={{
              desktop: images.rageOfTheSeaStoriesDesktopJpg,
              mobile: images.rageOfTheSeaStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 16th 2020"
            title="Running Free"
            author="Michelle"
            image={{
              desktop: images.runningFreeStoriesDesktopJpg,
              mobile: images.runningFreeStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 11th 2020"
            title="Behind the Waves"
            author="Lamarr Wilson"
            image={{
              desktop: images.behindTheWavesStoriesDesktopJpg,
              mobile: images.behindTheWavesStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 9th 2020"
            title="Calm Waters"
            author="Samantha Brooke"
            image={{
              desktop: images.calmWatersStoriesDesktopJpg,
              mobile: images.calmWatersStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 5th 2020"
            title="The Milky Way"
            author="Benjamin Cruz"
            image={{
              desktop: images.milkyWayStoriesDesktopJpg,
              mobile: images.milkyWayStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 4th 2020"
            title="Night at The Dark Forest"
            author="Mohammed Abdul"
            image={{
              desktop: images.darkForestStoriesDesktopJpg,
              mobile: images.darkForestStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="March 1st 2020"
            title="Somwarpet's Beauty"
            author="Michelle"
            image={{
              desktop: images.somwarpetStoriesDesktopJpg,
              mobile: images.somwarpetStoriesMobileJpg,
            }}
          />
          <StoryCard
            date="February 25th 2020"
            title="Land of Dreams"
            author="William Malcolm"
            image={{
              desktop: images.landOfDreamsStoriesDesktopJpg,
              mobile: images.landOfDreamsStoriesMobileJpg,
            }}
          />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Stories;
