import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import images from "../../images";

import "./index.scss";

const Pricing = () => {
  const [planLength, setPlanLength] = useState("monthly");

  return (
    <div className="Pricing">
      <Header />
      <main className="Pricing__main">
        <section className="Pricing__hero">
          <InfoCard
            theme="dark"
            heading="Pricing"
            text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. it's the simple way to create and share your photos."
            hasBorder={true}
          />
          <figure className="Pricing__hero-image-container">
            <img
              src={images.heroPricingDesktopJpg}
              alt=""
              className="Pricing__hero-image"
            />
          </figure>
        </section>

        <section className="Pricing__prices">
          <div className="Pricing__container container">
            <div className="Slider" tabIndex="0">
              <span className="Slider__text">Monthly</span>
              <div className="Slider__floor">
                <input
                  type="checkbox"
                  name="length"
                  className="Slider__checkbox"
                  id="length"
                />
                <div className="Slider__background"></div>
                <label htmlFor="length" className="Slider__circle"></label>
              </div>
              <span className="Slider__text">Yearly</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
