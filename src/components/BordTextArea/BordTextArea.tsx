import { SyntheticEvent } from "react";
import { IBordTextAreaProps } from "./BordTextArea.types";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import "./BordTextArea.scss";
const BordTextArea = ({
  placeholder,
  name,
  rows = 5,
  cols = 50,
  leftIconVariant,
  label,
  customWidth,
  filled = false,
  errorText,
  hideError,
  isDisabled = false,
  setInputValue,
  value,
  captionText,
  maxLength = 1000,
  isLoading = false,
}: IBordTextAreaProps) => {
  const className = `bordTextArea ${filled ? "filled" : ""} ${
    errorText && hideError ? "error" : ""
  } ${isDisabled ? "disabled" : ""}`;
  const caption = captionText ? captionText : errorText;
  const skeletonMain = `bordButtonSkeletonLoader ${customWidth}`;

  const handleInputChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    if (setInputValue) {
      setInputValue(value);
    }
  };

  if (isLoading) {
    return (
      <div className={skeletonMain} style={{ width: customWidth }}>
        <div className="skeletonLabel animationLoader" />
        <div className="skeletonContent animationLoader" />
        <div className="skeletonInfo">
          <div className="skeletonCaption animationLoader" />
          <div className="skeletonDescription animationLoader" />
        </div>
      </div>
    );
  }
  return (
    <div className={className} style={{ width: customWidth }}>
      <div className="bordTextAreaLabel">{label}</div>
      <div className="bordTextAreaContent">
        {leftIconVariant && (
          <div className="bordTextAreaIcon">
            <BordOneToneIcon variant={leftIconVariant} standardSize={14} />
          </div>
        )}

        <textarea
          className="bordTextAreaInput"
          placeholder={placeholder}
          name={name}
          rows={rows}
          cols={cols}
          disabled={isDisabled}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
      </div>
      <div className="bordTextAreaInfo">
        <div className="bordTextAreaCaption">{caption}</div>
        {value && (
          <div className="bordTextAreaValue">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default BordTextArea;
