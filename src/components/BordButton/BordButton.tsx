import * as React from "react";
import { IBordButton } from "./BordButton.types";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import "./BordButton.scss";

/**
 * @description A button component with different styles and loading state.
 * @prop {string} [formId] - The id of the form element to associate with the button.
 * @prop {string} [customWidth] - The width of the button, can be any valid CSS unit.
 * @prop {"filled" | "outlined"} [bordButtonStyle="filled"] - The style of the button, can be "filled" or "outlined".
 * @prop {React.MouseEventHandler<HTMLButtonElement>} [onClick] - A callback function to run when the button is clicked.
 * @prop {boolean} [disabled=false] - Whether the button is disabled or not.
 * @prop {string} [customClassName=""] - Add a custom class to the button.
 * @prop {string} [customFontSize] - The font size of the button text.
 * @prop {TbordOneToneIcon} [buttonIconOne] - The icon to show on the left side of the button.
 * @prop {TbordOneToneIcon} [buttonIconTwo] - The icon to show on the right side of the button.
 * @prop {boolean} [isLoading=false] - Whether the button is in a loading state or not.
 * @prop {string} [label="Button Text"] - The label of the button.
 * @prop {string} [customHeight="auto"] - The height of the button, can be any valid CSS unit.
 * @prop {"primary" | "secondary" | "tertiary"} [modeButton="primary"] - The mode of the button, can be "primary", "secondary" or "tertiary".
 * @returns {React.ReactElement} A button component with different styles and loading state.
 */
const BordButton = (props: IBordButton): React.ReactElement => {
  const {
    formId,
    customWidth,
    bordButtonStyle,
    onClick,
    disabled,
    customClassName = "",
    customFontSize,
    buttonIconOne,
    buttonIconTwo,
    isLoading,
    label = "Button Text",
    customHeight = "auto",
    modeButton = "primary",
  } = props;
  // Add a custom class based on the custom height
  const customHeightStyle = customHeight !== "auto" ? `ht-${customHeight}` : "";
  // Add a custom class based on the bordButtonStyle
  const buttonOutlineStyle =
    bordButtonStyle === "outlined" && "bordButtonOutlined";
  // Add a custom class based on the customWidth and customHeightStyle
  const skeletonLoaderClassnames = `bordButtonSkeletonLoader animationLoader ${customWidth} ${customHeightStyle} `;
  // Add a custom class based on the modeButton
  const styleModeButton = modeButton;
  // If the button is in a loading state, render a skeleton loader
  if (isLoading) return <div className={skeletonLoaderClassnames} />;

  return (
    <button
      className={`bordButton ${customClassName} ${buttonOutlineStyle} ${customWidth} ${customHeightStyle} ${styleModeButton}`}
      form={formId}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {buttonIconOne && (
        <div className="iconContainer">
          <BordOneToneIcon variant={buttonIconOne} stroke="white" />
        </div>
      )}
      {label && (
        <div className={`textContainer`} style={{ fontSize: customFontSize }}>
          {label}
        </div>
      )}
      {buttonIconTwo && (
        <div className="iconContainer">
          <BordOneToneIcon variant={buttonIconTwo} stroke="white" />
        </div>
      )}
    </button>
  );
};

export default BordButton;
