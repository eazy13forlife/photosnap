import React from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import Footer from "../../components/Footer/Footer.js";
import FeatureCard from "../../components/FeatureCard/FeatureCard.js";
import images from "../../images/";
import "./index.scss";

const Features = () => {
  return (
    <div className="Features">
      <Header />
      <main className="Features__main">
        <div className="Features__hero">
          <InfoCard
            theme="dark"
            heading="features"
            text="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
            hasButton={false}
          />
          <figure className="Features__hero-image-container">
            <img
              src={images.heroFeaturesDesktopJpg}
              className="Features__hero-image"
            />
          </figure>
        </div>
        <div className="Feature__features">
          <div className="features__container container">
            <FeatureCard
              image={images.responsiveFeaturesDesktopSvg}
              heading="100% Responsive"
              text=""
            />
            <FeatureCard
              image={images.noLimitFeaturesDesktopSvg}
              heading="No Photo Upload Limit"
              text=""
            />
            <FeatureCard
              image={images.embedFeaturesDesktopSvg}
              heading="Available to Embed"
              text=""
            />
            <FeatureCard
              image={images.customDomainFeaturesDesktopSvg}
              heading="Custom Domain"
              text=""
            />
            <FeatureCard
              image={images.boostExposureFeaturesDesktopSvg}
              heading="Boost Your Exposure"
              text=""
            />
            <FeatureCard
              image={images.dragDropFeaturesDesktopSvg}
              heading="Drag & Drop Image"
              text=""
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
