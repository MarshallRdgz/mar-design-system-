import { IBordMarketplaceButtonProps } from "./BordMarketplaceButton.types";
import "./BordMarketplaceButton.scss";
/**
 * @param {Object} props - The properties object.
 * @param {string} props.buttonColor - The color of the button, applied as a CSS class.
 * @param {string} props.buttonText - The text to display inside the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered button component.
 */
declare const BordMarketplaceButton: ({ buttonColor, buttonText, onClick, ...rest }: IBordMarketplaceButtonProps) => JSX.Element;
export default BordMarketplaceButton;
