import { IBordCheckBoxProps } from "./BordCheckBox.types";
import BordCheckBoxButton from "./BordCheckBoxButton";
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
const BordCheckBox = ({
  label,
  isButtonActive,
  isButtonDisabled,
  handleClickButton,
  customSize,
  labelProps,
}: IBordCheckBoxProps) => {
  const isActive = isButtonActive ? "active" : "";
  const isDisabled = isButtonDisabled ? "disabled" : "";
  const isInactive = isButtonActive && isButtonDisabled ? "inactive" : "";
  const className = `bordCheckBox ${isActive} ${isDisabled} ${isInactive}`;

  return (
    <div className={className.trim()}>
      <BordCheckBoxButton
        isActive={isActive}
        isDisabled={isDisabled}
        isInactive={isInactive}
        customSize={customSize}
        handleClickButton={handleClickButton}
        isButtonActive={isButtonActive}
        isButtonDisabled={isButtonDisabled}
      />
      {!!label && (
        <p className="bordCheckBoxLabel" {...labelProps}>
          {label}
        </p>
      )}
    </div>
  );
};

export default BordCheckBox;
