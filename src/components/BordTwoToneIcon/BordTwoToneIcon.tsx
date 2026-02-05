import React from "react";
import { IBordTwoToneIconProps } from "./BordTwoToneIcon.types";
import { listOfBordTwoToneIcons } from "./Icons/listOfBordTwoToneIcons";

const BordTwoToneIcon = ({
  variant,
  standardSize = 24,
  customWidth,
  colorTones,
}: IBordTwoToneIconProps) => {
  const twoToneIcon = listOfBordTwoToneIcons[variant];

  const standardSizeStyle = `${(standardSize / 10).toFixed(1)}rem`;
  const iconWidth = customWidth || standardSizeStyle;
  return (
    <div className="bordTwoToneIcon" style={{ width: iconWidth }}>
      {React.createElement(twoToneIcon, { colorTones })}
    </div>
  );
};

export default BordTwoToneIcon;
