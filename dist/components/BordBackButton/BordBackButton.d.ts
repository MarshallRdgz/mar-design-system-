import { IBordBackButtonProps } from "./BordBackButton.types";
import "./BordBackButton.scss";
/**
 * @param {IBordBackButtonProps} props - The properties for the BordBackButton component.
 * @param {string} props.buttonText - The text to be displayed on the button.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered BordBackButton component.
 */
declare const BordBackButton: ({ buttonText, onClick, ...rest }: IBordBackButtonProps) => JSX.Element;
export default BordBackButton;
