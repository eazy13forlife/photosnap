import React from "react";

import "./ContentBorder.scss";

const ContentBorder = ({
  className,
  verticalPadding,
  horizontalPadding,
  side,
  children,
  bgColor,
}) => {
  const isHorizontal = side === "top" || side === "bottom";

  const renderDirectionClass = () => {
    if (isHorizontal) {
      return "horizontal";
    } else {
      return "vertical";
    }
  };

  const renderParentPadding = () => {
    let padding;
    if (isHorizontal) {
      padding = `0rem ${horizontalPadding}rem`;
    } else {
      padding = `${verticalPadding}rem 0rem`;
    }
    return {
      padding: padding,
      backgroundColor: bgColor,
    };
  };

  const renderChildPadding = () => {
    if (isHorizontal) {
      return {
        padding: `${verticalPadding}rem 0rem`,
      };
    } else {
      return {
        padding: `0rem ${horizontalPadding}rem`,
      };
    }
  };

  return (
    <div
      className={`${
        className ? className : ""
      } ContentBorder ContentBorder--${renderDirectionClass()}`}
      style={renderParentPadding()}
    >
      <div
        className={`ContentBorder__child-wrapper ContentBorder__child-wrapper--${renderDirectionClass()}`}
        style={renderChildPadding()}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentBorder;
