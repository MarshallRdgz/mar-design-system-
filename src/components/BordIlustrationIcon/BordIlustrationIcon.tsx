import React from "react";
import { listOfBordIlustrationIcon } from "./Icons/listOfBordIlustrationIcon";
import { IBordIlustrationIconProps } from "./BordIlustration.types";

const BordIlustrationIcon = ({
  variant,
  standardSize = 24,
  customWidth,
  style,
}: IBordIlustrationIconProps) => {
  const iconComponent = listOfBordIlustrationIcon[variant];

  const standardSizeStyle = `${(standardSize / 10).toFixed(1)}rem`;
  const iconWidth = customWidth || standardSizeStyle;

  return (
    <div className="bordIlustrationIcon" style={{ ...style, width: iconWidth }}>
      {React.createElement(iconComponent, {})}
    </div>
  );
};

export default BordIlustrationIcon;
