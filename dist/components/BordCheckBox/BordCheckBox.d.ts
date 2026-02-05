import { IBordCheckBoxProps } from "./BordCheckBox.types";
import "./BordCheckBox.scss";
/**
 * BordCheckBox component
 *
 * @param {IBordCheckBoxProps} props - Props for the component
 * @param {string} [props.label] - The label of the checkbox
 * @param {boolean} [props.isButtonActive] - Is the button active or not?
 * @param {boolean} [props.isButtonDisabled] - Is the button disabled or not?
 * @param {() => void} [props.handleClickButton] - A callback function to run when the button is clicked
 * @param {string} [props.customSize] - Custom size of the checkbox
 * @returns {JSX.Element} A JSX element representing the checkbox component
 */
declare const BordCheckBox: ({ label, isButtonActive, isButtonDisabled, handleClickButton, customSize, labelProps, }: IBordCheckBoxProps) => import("react/jsx-runtime").JSX.Element;
export default BordCheckBox;
