import type { FC } from "react";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import { IBordActionButtonProps } from "./BordActionButton.type";
import "../BordActionButton/BordActionButton.scss";

const BordActionButton: FC<IBordActionButtonProps> = ({
  variant = "figma",
  subTitle = "subTitle",
  title = "title",
  ...rest
}) => {
  const iconDefault = "figma";
  return (
    <button className="bordActionButton" {...rest}>
      <BordOneToneIcon variant={variant ?? iconDefault} />
      <span className="bordActionButtonSubTitle">{subTitle}</span>
      <span className="bordActionButtonTitle">{title}</span>
    </button>
  );
};

export default BordActionButton;
