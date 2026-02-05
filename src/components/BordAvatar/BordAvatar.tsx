import React from "react";
import { IBordAvatarProps } from "./BordAvatar.types";
import { listOfBordAvatars } from "./Avatars/listOfBordAvatars";

const BordAvatar = ({
  variant,
  standardSize = 32,
  customWidth,
}: IBordAvatarProps) => {
  const avatar = listOfBordAvatars[variant];

  const standardSizeStyle = `${(standardSize / 10).toFixed(1)}rem`;
  const iconWidth = customWidth || standardSizeStyle;
  return (
    <div className="bordAvatar" style={{ width: iconWidth }}>
      {React.createElement(avatar, {})}
    </div>
  );
};

export default BordAvatar;
