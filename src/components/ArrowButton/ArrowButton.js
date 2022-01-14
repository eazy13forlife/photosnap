import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../images/shared/desktop/arrow.svg";

import "./ArrowButton.scss";

const ArrowButton = ({ text, link, color, size }) => {
  return (
    <Link
      to={link}
      className={`ArrowButton ArrowButton--${color} ArrowButton--${size}`}
      tabIndex="0"
    >
      <span className={`ArrowButton__flex ArrowButton__flex--${size}`}>
        {text}
        <Icon className="arrow-icon" />
      </span>
    </Link>
  );
};

export default ArrowButton;
