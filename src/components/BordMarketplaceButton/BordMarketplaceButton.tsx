import React from "react";
import { IBordMarketplaceButtonProps } from "./BordMarketplaceButton.types";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import "./BordMarketplaceButton.scss";

/**
 * @param {Object} props - The properties object.
 * @param {string} props.buttonColor - The color of the button, applied as a CSS class.
 * @param {string} props.buttonText - The text to display inside the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered button component.
 */

const BordMarketplaceButton = ({
  buttonColor,
  buttonText,
  onClick,
  ...rest
}: IBordMarketplaceButtonProps): JSX.Element => {
  return (
    <button
      className={`bordMarketplaceButton ${buttonColor}`}
      onClick={onClick}
      {...rest}
    >
      <div className="bordMarketplaceButtonContainer">
        <BordOneToneIcon
          variant="shoppingCart"
          customWidth="1.4rem"
          stroke="#22CFAB"
        />
        <div>{buttonText}</div>
      </div>
    </button>
  );
};

export default BordMarketplaceButton;
