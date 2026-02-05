import { useEffect, useState, SyntheticEvent, createElement } from "react";
import { FORM_COMPONENTS_STANDARD_SIZES } from "../../types/global.types";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import { IBordTextInputProps } from "./BordTextInput.type";
import "./BordTextInput.style.scss";

const BordTextInput = ({
  placeholder,
  currentText = "",
  setCurrentText,
  standardSize = FORM_COMPONENTS_STANDARD_SIZES.MD,
  label,
  caption,
  className = "",
  isFilled,
  style,
  inputProps,
  labelProps,
  leftIconVariant,
  errorText = "",
  disabled,
  showSkeletonLoader = false,
  autoComplete = "off",
  hideErrorText,
  handleBlur,
  setIsPassword,
  isPassword,
  showPasswordIcon,
}: IBordTextInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const componentIsFilled = isFilled || !!inputValue?.length;
  const filledStyles = componentIsFilled && !disabled ? "filled" : "";
  const errorStyles = errorText && errorText.length ? "error" : "";
  const deactivatedStyles = disabled ? "disabled" : "";
  const focusedStyles = isFocused ? "focused" : "";

  const statusClassNames = `${filledStyles} ${deactivatedStyles} ${errorStyles} ${focusedStyles}`;
  const componentClassNames = `bordTextInput ${statusClassNames} ${className} ${standardSize}`;
  const skeletonLoaderClassnames = `bordTextInputSkeletonLoader ${standardSize || "extraSmall"} ${className}`;

  const showErrorText = errorText && !hideErrorText && errorText.length > 0;
  const showCaption = caption && !errorText;

  const isExtraSmall = standardSize === FORM_COMPONENTS_STANDARD_SIZES.XS;
  const xsPaddingStyles = isExtraSmall
    ? { paddingLeft: "0.6rem", paddingRight: "0.6rem" }
    : undefined;
  const xsIconMargin = isExtraSmall ? { marginRight: "0.2rem" } : undefined;

  const handleInputChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setInputValue(value);
  };

  const handleInputBlur = () => {
    if (handleBlur) handleBlur(currentText);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const TogglePassword = () => (
    <div
      className="passwordToggle"
      onClick={() => setIsPassword && setIsPassword(!isPassword)}
    >
      <BordOneToneIcon
        variant={isPassword ? "eye" : "eyeOff"}
        standardSize={14}
      />
    </div>
  );

  useEffect(() => {
    if (setCurrentText) setCurrentText(inputValue);
  }, [inputValue, setCurrentText]);

  useEffect(() => {
    if (inputValue) return;
    setInputValue(currentText);
  }, [inputValue, currentText]);

  if (showSkeletonLoader)
    return (
      <div className={skeletonLoaderClassnames} style={style}>
        {!!label && <div className="labelSkeletonLoader animationLoader" />}
        <div className="inputSkeletonLoader animationLoader" />
      </div>
    );

  return (
    <div
      className={componentClassNames}
      onBlur={handleInputBlur}
      style={style}
      onFocus={handleFocus}
    >
      {!!label && <label className={labelProps?.className}>{label}</label>}
      <div className="inputContainer" style={xsPaddingStyles}>
        {!!leftIconVariant &&
          createElement(BordOneToneIcon, {
            variant: leftIconVariant,
            standardSize: 14,
            style: xsIconMargin,
          })}
        <input
          style={inputProps?.style}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={handleInputChange}
          value={inputValue}
          disabled={disabled}
          {...inputProps}
        />
        {showPasswordIcon && <TogglePassword />}
      </div>
      {showErrorText && <div className="errorText">{errorText}</div>}
      {showCaption && <div className="caption">{caption}</div>}
    </div>
  );
};

export default BordTextInput;
