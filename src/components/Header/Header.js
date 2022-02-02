import React from "react";
import { Link } from "react-router-dom";
import images from "../../images";
import { ReactComponent as PhotosnapLogo } from "../../images/shared/desktop/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__container container">
        <figure className="Header__logo-container">
          <img
            src={images.logoSharedDesktopSvg}
            alt=""
            className="Header__logo"
          />
        </figure>
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
        <Link className="Header__button primary-button primary-button--dark">
          Get an invite
        </Link>
      </div>
    </header>
  );
};

export default Header;
