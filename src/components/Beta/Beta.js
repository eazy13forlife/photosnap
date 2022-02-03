import React from "react";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./Beta.scss";

const Beta = () => {
  return (
    <div className="Beta">
      <div className="Beta__container container">
        <h2 className="Beta__header">
          We&quot;re in beta. Get your invite today!
        </h2>
        <ArrowButton
          text="Get an invite"
          color="light"
          size="regular"
          link=""
        />
      </div>
    </div>
  );
};

export default Beta;
