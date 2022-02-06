import React from "react";
import { Link } from "react-router-dom";

import images from "../../images/";
import ArrowButton from "../ArrowButton/ArrowButton.js";
import { ReactComponent as Logo } from "../../images/shared/desktop/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container container">
        <figure className="Footer__logo-container">
          <Logo className="Footer__logo" />
        </figure>

        <nav className="Footer__nav">
          <ul className="Footer__nav-list">
            <li className="Footer__nav-item">
              <Link to="/home" className="Footer__nav-link">
                Home
              </Link>
            </li>
            <li className="Footer__nav-item">
              <Link to="/stories" className="Footer__nav-link">
                Stories
              </Link>
            </li>
            <li className="Footer__nav-item">
              <Link to="/features" className="Footer__nav-link">
                Features
              </Link>
            </li>
            <li className="Footer__nav-item">
              <Link to="/pricing" className="Footer__nav-link">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        <div className="Footer__icons">
          <Link class="Footer__icon-link">
            <img
              src={images.facebookSharedDesktopSvg}
              alt=""
              className="Footer__icon"
            />
          </Link>
          <Link class="Footer__icon-link">
            <img
              src={images.youtubeSharedDesktopSvg}
              alt=""
              className="Footer__icon"
            />
          </Link>
          <Link class="Footer__icon-link">
            <img
              src={images.twitterSharedDesktopSvg}
              alt=""
              className="Footer__icon"
            />
          </Link>
          <Link class="Footer__icon-link">
            <img
              src={images.pinterestSharedDesktopSvg}
              alt=""
              className="Footer__icon"
            />
          </Link>
          <Link class="Footer__icon-link">
            <img
              src={images.instagramSharedDesktopSvg}
              alt=""
              className="Footer__icon"
            />
          </Link>
        </div>

        <ArrowButton text="get an invite" color="light" size="regular" />

        <p className="Footer__text">Copyright 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
