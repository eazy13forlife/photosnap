import React from "react";
import images from "../../images/";
import { ReactComponent as Icon } from "../../images/shared/desktop/arrow.svg";

import ArrowButton from "../../components/ArrowButton/ArrowButton.js";
import "./index.scss";

const Home = () => {
  return (
    <div className="Home">
      <ArrowButton color="light" text="button 3" size="regular" />
    </div>
  );
};

export default Home;
