import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import history from "../../history.js";
import images from "../../images";
import "./Header.scss";

const Header = () => {
  const mobileRef = useRef();

  const [isNavChecked, setIsNavChecked] = useState(false);
  const [mobileHeight, setMobileHeight] = useState("auto");

  useEffect(() => {
    if (isNavChecked) {
      setMobileHeight(mobileRef.current.clientHeight);
    } else {
      setMobileHeight("auto");
    }
  }, [isNavChecked]);

  return (
    <header className="Header">
      <div className="Header__container container">
        <figure
          className="Header__logo-container"
          onClick={() => {
            history.push("/");
          }}
        >
          <img
            src={images.logoSharedDesktopSvg}
            alt=""
            className="Header__logo"
          />
        </figure>

        <div className="Header__mobile">
          <input
            type="checkbox"
            name="toggleNav"
            className="Header__checkbox"
            id="mobile_checkbox"
            onChange={() => {
              if (isNavChecked) {
                setIsNavChecked(false);
              } else {
                setIsNavChecked(true);
              }
            }}
          />
          <label className="Header__mobile-button" htmlFor="mobile_checkbox">
            <span className="Header__mobile-lines"></span>
          </label>
          <div
            className="Header__mobile-height"
            style={isNavChecked ? { height: `${mobileHeight}px` } : {}}
          >
            <div className="Header__mobile-container" ref={mobileRef}>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
