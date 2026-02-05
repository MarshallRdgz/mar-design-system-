import { IBordRadioButtonProps } from "./BordRadioButton.types";
import "./BordRadioButton.scss";
/**
 * @description A component for rendering a radio button with a label.
 * @prop {string} [componentSize] - The size of the component, can be "extraSmall", "small", "medium", "large", or "extraLarge".
 * @prop {string} [customWidth] - The width of the component, can be any valid CSS unit.
 * @prop {boolean} [isButtonActive] - Is the button active or not?
 * @prop {string} [label] - The label of the button.
 * @prop {boolean} [disabled=false] - Is the button disabled or not?
 * @prop {() => void} [onClick] - A callback function to run when the button is clicked and not disabled.
 * @prop {ComponentProps<"svg">} [svgProps] - an object with svg props to pass to the primitive component
 * @prop {ComponentProps<"p">} [labelProps] - an object with p element props to pass to the primitive component
 * @returns {JSX.Element} A JSX element representing the radio button component.
 */
declare const BordRadioButton: ({ onClick, componentSize, isButtonActive, label, customWidth, labelProps, svgProps, disabled, ...rest }: IBordRadioButtonProps) => import("react/jsx-runtime").JSX.Element;
export default BordRadioButton;
