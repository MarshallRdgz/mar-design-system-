import type { FC } from "react";
import React from "react";
import { IBordNotificationIconProps } from "./IBordNotificationIconProps.types";
import { listOfBordNotificationIcons } from "./listOfBordNotificationIcons";

const BordNotificationIcon: FC<IBordNotificationIconProps> = ({
  variant,
  standardSize = 32,
  customWidth,
  stroke,
  onClick
}) => {
  const notifications = listOfBordNotificationIcons[variant];
  const standardSizeStyle = `${(standardSize / 10).toFixed(1)}rem`;
  const iconWidth = customWidth || standardSizeStyle;
  return (
    <div style={{ width: iconWidth }}>
      {React.createElement(notifications, {stroke, onClick})}
    </div>
  );
};

export default BordNotificationIcon;
