import React from "react";
import { IBordCheckBoxSvgProps } from "./BordCheckBox.types";
import "./BordCheckBox.scss";
/**
 * BordCheckBoxSvg component
 *
 * @param {IBordCheckBoxSvgProps} props - Props for the component
 * @param {number} [props.size=16] - Size of the radio button
 * @param {string} [props.customSize] - Custom size of the radio button
 * @param {boolean} [props.isActive=false] - Is the button active or not?
 * @param {boolean} [props.isDisabled=false] - Is the button disabled or not?
 * @param {boolean} [props.isInactive=false] - Is the button inactive or not?
 * @param {ComponentProps<"svg">} [props.svgProps] - an object with svg props to pass to the primitive component
 * @returns {ReactElement} The rendered ReactElement
 */
const BordCheckBoxSvg = ({
  size = 16,
  customSize,
  isActive,
  isDisabled,
  isInactive,
  svgProps,
}: IBordCheckBoxSvgProps): React.ReactElement => {
  const sizeStyle = `${(size / 10).toFixed(1)}rem`;
  const width = customSize || sizeStyle;
  const className = `bordCheckBoxButtonSvg ${isActive} ${isDisabled} ${isInactive}`;
  return (
    <div className={className.trim()} style={{ width }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        {...svgProps}
      >
        <path
          className="largeRect"
          d="M15.234 12.155a3.52 3.52 0 0 1-3.082 3.11c-2.794.313-5.51.313-8.304 0a3.52 3.52 0 0 1-3.082-3.11C.62 10.791.5 9.406.5 8c0-1.406.12-2.791.266-4.156A3.52 3.52 0 0 1 3.848.735a36.803 36.803 0 0 1 8.304 0l.056-.497-.056.497a3.52 3.52 0 0 1 3.082 3.11C15.38 5.208 15.5 6.593 15.5 8c0 1.406-.12 2.791-.266 4.155Z"
        />
        <path
          className="smallRect"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12 5-5.5 5.5L4 8"
        />
      </svg>
    </div>
  );
};

export default BordCheckBoxSvg;
