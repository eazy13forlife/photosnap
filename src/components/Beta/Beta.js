import React from "react";

import ArrowButton from "../ArrowButton/ArrowButton.js";
import "./Beta.scss";

const Beta = () => {
  return (
    <section className="Beta">
      <div className="Beta__container container">
        <h2 className="Beta__header">
          We&apos;re in beta. Get your invite today!
        </h2>
        <ArrowButton
          text="Get an invite"
          color="light"
          size="regular"
          link=""
        />
      </div>
    </section>
  );
};

export default Beta;
