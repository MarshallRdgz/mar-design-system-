import React from "react";
import { IBordBackButtonProps } from "./BordBackButton.types";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import "./BordBackButton.scss";

/**
 * @param {IBordBackButtonProps} props - The properties for the BordBackButton component.
 * @param {string} props.buttonText - The text to be displayed on the button.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered BordBackButton component.
 */

const BordBackButton = ({
  buttonText,
  onClick,
  ...rest
}: IBordBackButtonProps): JSX.Element => {
  return (
    <div className="bordBackButton" onClick={onClick} {...rest}>
      <BordOneToneIcon variant="arrowHeadLeft" customWidth="1.2rem" />
      <div className="buttonText">{buttonText}</div>
    </div>
  );
};

export default BordBackButton;
