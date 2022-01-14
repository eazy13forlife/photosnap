import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PhotosnapLogo } from "../../images/shared/desktop/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <PhotosnapLogo />
      <nav className="Header__nav">
        <ul className="Header__nav-list">
          <li className="Header__nav-item">
            <Link to="/stories" className="Header__nav-link">
              Stories
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link to="/features" className="Header__nav-link">
              Features
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link to="/pricing" className="Header__nav-link">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
      <Link
        to=""
        className="Header__button primary-button primary-button--dark"
      >
        Get an invite
      </Link>
    </header>
  );
};

export default Header;
