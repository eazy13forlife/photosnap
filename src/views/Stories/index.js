import React from "react";

import Header from "../../components/Header/Header.js";
import FeaturedStoryCard from "../../components/FeaturedStoryCard/FeaturedStoryCard.js";
import StoryCard from "../../components/StoryCard/StoryCard.js";
import Footer from "../../components/Footer/Footer.js";
import images from "../../images";
import ArrowButton from "../../components/ArrowButton/ArrowButton.js";
import "./index.scss";

const Stories = () => {
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
            backgroundImage={images.moonOfAppalaciaStoriesDesktopJpg}
          />
        </section>

        <section className="Stories__all">
          <StoryCard
            date="April 16th 2020"
            title="The Mountains"
            author="John Appleseed"
            image={images.mountainsStoriesDesktopJpg}
          />
          <StoryCard
            date="April 14th 2020"
            title="Sunset Cityscapes"
            author="Benjamin Cruz"
            image={images.cityscapesStoriesDesktopJpg}
          />
          <StoryCard
            date="April 11th 2020"
            title="18 days voyage"
            author="Alexei Borodin"
            image={images.eighteenDaysVoyageStoriesDesktopJpg}
          />
          <StoryCard
            date="April 9th 2020"
            title="Architecturals"
            author="Samantha Brooke"
            image={images.architecturalsStoriesDesktopJpg}
          />
          <StoryCard
            date="April 7th 2020"
            title="World Tour 2019"
            author="Timothy Wagner"
            image={images.worldTourStoriesDesktopJpg}
          />
          <StoryCard
            date="April 3rd 2020"
            title="Unforseen Corners"
            author="William Malcolm"
            image={images.unforeseenCornersStoriesDesktopJpg}
          />
          <StoryCard
            date="March 29th 2020"
            title="King on Africa: Part II"
            author="Tim Hillenburg"
            image={images.kingOnAfricaStoriesDesktopJpg}
          />
          <StoryCard
            date="March 21st 2020"
            title="The Trip to Nowhere"
            author="Felicia Rourke"
            image={images.tripToNowhereStoriesDesktopJpg}
          />
          <StoryCard
            date="March 19th 2020"
            title="Rage of the Sea"
            author="Mohammed Abdul"
            image={images.rageOfTheSeaStoriesDesktopJpg}
          />
          <StoryCard
            date="March 16th 2020"
            title="Running Free"
            author="Michelle"
            image={images.runningFreeStoriesDesktopJpg}
          />
          <StoryCard
            date="March 11th 2020"
            title="Behind the Waves"
            author="Lamarr Wilson"
            image={images.behindTheWavesStoriesDesktopJpg}
          />
          <StoryCard
            date="March 9th 2020"
            title="Calm Waters"
            author="Samantha Brooke"
            image={images.calmWatersStoriesDesktopJpg}
          />
          <StoryCard
            date="March 5th 2020"
            title="The Milky Way"
            author="Benjamin Cruz"
            image={images.milkyWayStoriesDesktopJpg}
          />
          <StoryCard
            date="March 4th 2020"
            title="Night at The Dark Forest"
            author="Mohammed Abdul"
            image={images.darkForestStoriesDesktopJpg}
          />
          <StoryCard
            date="March 1st 2020"
            title="Somwarpet's Beauty"
            author="Michelle"
            image={images.somwarpetStoriesDesktopJpg}
          />
          <StoryCard
            date="February 25th 2020"
            title="Land of Dreams"
            author="William Malcolm"
            image={images.landOfDreamsStoriesDesktopJpg}
          />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Stories;
