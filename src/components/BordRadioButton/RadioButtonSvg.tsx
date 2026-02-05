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
const RadioButtonSvg = ({
  size = 16,
  customSize,
  isActive,
  isDisabled,
  isInactive,
  svgProps,
}: IBordRadioButtonSvgProps): React.ReactElement => {
  const sizeStyle = `${(size / 10).toFixed(1)}rem`;
  const width = customSize || sizeStyle;

  const className = [
    "bordRadioButtonSvg",
    isActive ? "active" : "",
    isDisabled ? "disabled" : "",
    isInactive ? "inactive" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} style={{ width }}>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        {...svgProps}
      >
        <rect
          width="15"
          height="15"
          x=".5"
          y=".5"
          rx="7.5"
          className="largeRect"
        />
        <rect
          width="13"
          height="13"
          x="1.5"
          y="1.5"
          rx="6.5"
          className="smallRect"
        />
        <circle cx="8" cy="8" r="4.5" className="innerCircle" />
      </svg>
    </div>
  );
};

export default RadioButtonSvg;
