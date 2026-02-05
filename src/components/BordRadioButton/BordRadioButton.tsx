import { IBordRadioButtonProps } from "./BordRadioButton.types";
import RadioButtonSvg from "./RadioButtonSvg";
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
const BordRadioButton = ({
  onClick,
  componentSize,
  isButtonActive,
  label,
  customWidth,
  labelProps,
  svgProps,
  disabled = false,
  ...rest
}: IBordRadioButtonProps) => {
  const sizeStyles = componentSize ? componentSize : "medium";
  const styleIsButtonActive = isButtonActive ? "active" : "";
  const styleIsDisabled = disabled ? "disabled" : "";
  const styleIsButtonActiveAndDisabled =
    styleIsButtonActive && styleIsDisabled ? "inactive" : "";

  const classnames = `bordRadioButton ${sizeStyles} ${styleIsButtonActive} ${styleIsButtonActiveAndDisabled} ${styleIsDisabled}`;
  const handleClick = disabled ? undefined : onClick;

  return (
    <div className={classnames} onClick={handleClick} {...rest}>
      <RadioButtonSvg
        customSize={customWidth}
        isActive={styleIsButtonActive}
        isDisabled={styleIsDisabled}
        isInactive={styleIsButtonActiveAndDisabled}
        svgProps={svgProps}
      />
      {label && (
        <p className={`bordRadioButtonLabel`} {...labelProps}>
          {label}
        </p>
      )}
    </div>
  );
};
export default BordRadioButton;
