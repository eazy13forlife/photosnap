import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import Footer from "../../components/Footer/Footer.js";
import FeatureCard from "../../components/FeatureCard/FeatureCard.js";
import Beta from "../../components/Beta/Beta.js";
import images from "../../images/";
import "./index.scss";

const Features = () => {
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
    <div className="Features">
      <Header />
      <main className="Features__main">
        <section className="Features__hero two-grid">
          <InfoCard
            className="two-grid__content"
            theme="dark"
            heading="features"
            text="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
            hasBorder={true}
            isMobile={isMobile}
          />
          <picture>
            <source
              media="(max-width:40.625em)"
              srcSet={images.heroFeaturesMobileJpg}
            />
            <source
              media="(max-width:50em)"
              srcSet={images.heroFeaturesTabletJpg}
            />
            <img
              src={images.heroFeaturesDesktopJpg}
              alt="man looking out at mountains with a camera in his hand"
            />
          </picture>
        </section>

        <section className="Features__features">
          <div className="features__grid container">
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
        </section>

        <section className="Features__beta">
          <Beta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
