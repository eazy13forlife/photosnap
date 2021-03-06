import React, { useState } from "react";

import Header from "../../components/Header/Header.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import PricingCard from "../../components/PricingCard/PricingCard.js";
import FeaturesStrip from "../../components/FeaturesStrip/FeaturesStrip.js";
import Beta from "../../components/Beta/Beta.js";
import Footer from "../../components/Footer/Footer.js";
import images from "../../images";

import "./index.scss";

const prices = {
  units: {
    monthly: "month",
    yearly: "year",
  },
  basic: {
    monthly: "19.00",
    yearly: "190.00",
  },
  pro: {
    monthly: "39.00",
    yearly: "390.00",
  },
  business: {
    monthly: "99.00",
    yearly: "990.000",
  },
};
const Pricing = () => {
  const [planLength, setPlanLength] = useState("monthly");

  const getPriceAndLength = (plan, length) => {
    return `${prices[plan][length]}/${prices["units"][length]}`;
  };

  return (
    <div className="Pricing">
      <Header />
      <main className="Pricing__main">
        <section className="Pricing__hero two-grid">
          <InfoCard
            className="two-grid__content"
            theme="dark"
            heading="Pricing"
            text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. it's the simple way to create and share your photos."
            hasBorder={true}
          />
          <picture>
            <source
              media="(max-width:40.625em)"
              srcSet={images.heroPricingMobileJpg}
            />
            <source
              media="(max-width:50em)"
              srcSet={images.heroPricingTabletJpg}
            />
            <img
              src={images.heroPricingDesktopJpg}
              alt="man looking out at mountains with a camera in his hand"
            />
          </picture>
        </section>

        <section className="Pricing__prices">
          <div className="Pricing__container container">
            <p className="sr-only">Select plan length.</p>
            <div className="Slider" tabIndex="0" htmlFor="length">
              <span className="Slider__text" aria-hidden="true">
                Monthly
              </span>
              <button
                className="Slider__floor"
                aria-description={`Toggles between monthly and yearly. Currently ${planLength}`}
                data-length={planLength}
                type="button"
                onClick={() => {
                  if (planLength === "monthly") {
                    setPlanLength("yearly");
                  } else {
                    setPlanLength("monthly");
                  }
                }}
              >
                <span className="Slider__background"></span>
                <span className="Slider__circle"></span>
              </button>
              <span className="Slider__text" aria-hidden="true">
                Yearly
              </span>
            </div>
            <div className="Pricing__pricing-cards">
              <PricingCard
                theme="light"
                header="basic"
                text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
                priceAndLength={getPriceAndLength("basic", planLength)}
              />
              <PricingCard
                theme="dark"
                header="pro"
                text="More advanced features available. Recommended fo photography veterans and professionals."
                priceAndLength={getPriceAndLength("pro", planLength)}
                highlight={true}
              />
              <PricingCard
                theme="light"
                header="business"
                text="Additional features available such as more detailed metrics. Recommended for business owners"
                priceAndLength={getPriceAndLength("business", planLength)}
              />
            </div>
          </div>
        </section>

        <section className="Pricing__compare">
          <div className="Pricing__compare-container container">
            <h2 className="Pricing__compare-heading section-heading">
              Compare
            </h2>
            <div
              className="Pricing__compare-table"
              aria-label="features"
              aria-description="Compare the features available for all our different plans"
            >
              <FeaturesStrip
                feature="The Features"
                setup={true}
                plans={["basic", "pro", "business"]}
              />
              <FeaturesStrip
                feature="Unlimited Story Posting"
                plans={[
                  { type: "basic", included: true },
                  { type: "pro", included: true },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Unlimited Photo Upload"
                plans={[
                  { type: "basic", included: true },
                  { type: "pro", included: true },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Embedded Custom Content"
                plans={[
                  { type: "basic", included: false },
                  { type: "pro", included: true },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Customized Metadata"
                plans={[
                  { type: "basic", included: false },
                  { type: "pro", included: true },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Advanced Metrics"
                plans={[
                  { type: "basic", included: false },
                  { type: "pro", included: false },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Photo Downloads"
                plans={[
                  { type: "basic", included: false },
                  { type: "pro", included: false },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Search Engine Indexing"
                plans={[
                  { type: "basic", included: false },
                  { type: "pro", included: false },
                  { type: "business", included: true },
                ]}
              />
              <FeaturesStrip
                feature="Custom Analytics"
                plans={[
                  { type: "basic", included: false },
                  { type: "pro", included: false },
                  { type: "business", included: true },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="Pricing__beta">
          <Beta />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Pricing;

/*
  <label className="Slider" tabIndex="0" htmlFor="length">
              <span className="Slider__text">Monthly</span>
              <input
                type="checkbox"
                name="length"
                className="Slider__checkbox sr-only"
                id="length"
              />
              <span className="Slider__floor">
                <span className="Slider__background"></span>
                <span className="Slider__circle"></span>
              </span>
              <span className="Slider__text">Yearly</span>
            </label>


                     <div className="FeaturesStrip">
                <h3 className="FeaturesStrip__heading">The Features</h3>
                <div className="FeaturesStrip__plans">
                  <div className="FeaturesStrip__plan">
                    <h3 className="FeaturesStrip__heading">Basic</h3>
                  </div>
                  <div className="FeaturesStrip__plan">
                    <h3 className="FeaturesStrip__heading">Pro</h3>
                  </div>
                  <div className="FeaturesStrip__plan">
                    <h3 className="FeaturesStrip__heading">Business</h3>
                  </div>
                </div>
              </div>


            
        <table role="table" className="">
          <tr>
            <th scope="col" role="columnheade">
              The Features
            </th>
            <th scope="col">Basic</th>
            <th scope="col">Pro</th>
            <th scope="col">Business</th>
          </tr>
          <tr>
            <th>Unlimited Story Posting</th>
            <td>yes</td>
            <td>yes</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Unlimited Photo Upload</th>
            <td>yes</td>
            <td>yes</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Embedded Custom Content</th>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Customized Metadata</th>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Advanced metrics</th>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Photo downloads</th>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Search Engine Indexing</th>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
          </tr>
          <tr>
            <th>Custom Analystics</th>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
          </tr>
  </table>
        
            */
