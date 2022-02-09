import React, { useState, useEffect } from "react";

import check from "../../images/pricing/desktop/check.svg";
import "./FeaturesStrip.scss";

const FeaturesStrip = ({ feature, plans, setup }) => {
  const [showPlanNames, setShowPlanNames] = useState(window.innerWidth <= 450);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setShowPlanNames(true);
    } else {
      setShowPlanNames(false);
    }
  }, []);

  const renderedPlans = plans.map((plan, index) => {
    if (setup) {
      return (
        <h3
          className="FeaturesStrip__heading"
          aria-description={`${plan} column`}
          key={index}
        >
          {plan}
        </h3>
      );
    } else {
      return (
        <div className="FeaturesStrip__plan" key={index}>
          {showPlanNames === true ? (
            <p className="FeaturesStrip__plan-name">{plan.type}</p>
          ) : null}
          {plan.included ? (
            <figure className="FeaturesStrip__image-container">
              <img
                src={check}
                alt="check mark"
                className="FeaturesStrip__icon"
                aria-description={`${plan.type} has ${feature}.`}
              />
            </figure>
          ) : (
            <p className="sr-only">{`${plan.type} does not have ${feature}.`}</p>
          )}
        </div>
      );
    }
  });

  return (
    <div className="FeaturesStrip">
      <h3 className="FeaturesStrip__heading">{feature}</h3>
      <div className="FeaturesStrip__plans">{renderedPlans}</div>
    </div>
  );
};

export default FeaturesStrip;
