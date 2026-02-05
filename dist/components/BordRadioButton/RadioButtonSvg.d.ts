import React from "react";
import { IBordRadioButtonSvgProps } from "./BordRadioButton.types";
import "./BordRadioButton.scss";
/**
 * RadioButtonSvg component
 *
 * @param {IBordRadioButtonSvgProps} props - Props for the component
 * @param {number} [props.size=16] - Size of the radio button
 * @param {string} [props.customSize] - Custom size of the radio button
 * @param {boolean} [props.isActive=false] - Is the button active or not?
 * @param {boolean} [props.isDisabled=false] - Is the button disabled or not?
 * @param {boolean} [props.isInactive=false] - Is the button inactive or not?
 * @param {ComponentProps<"svg">} [props.svgProps] - an object with svg props to pass to the primitive component
 * @returns {JSX.Element} The rendered JSX element
 */
declare const RadioButtonSvg: ({ size, customSize, isActive, isDisabled, isInactive, svgProps, }: IBordRadioButtonSvgProps) => React.ReactElement;
export default RadioButtonSvg;
