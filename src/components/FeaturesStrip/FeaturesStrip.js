import React, { useState, useEffect } from "react";

import check from "../../images/pricing/desktop/check.svg";
import "./FeaturesStrip.scss";

const FeaturesStrip = ({ feature, plans, setup }) => {
  const [showPlanNames, setShowPlanNames] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 368) {
      setShowPlanNames(true);
    } else {
      setShowPlanNames(false);
    }
  }, []);

  const renderedPlans = plans.map((plan, index) => {
    if (setup) {
      return <h3 className="FeaturesStrip__heading">{plan}</h3>;
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
              />
            </figure>
          ) : null}
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
