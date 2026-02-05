import BordCheckBoxSvg from "./BordCheckBoxSvg";
import { IcheckBoxButton } from "./BordCheckBox.types";
import "./BordCheckBox.scss";

const BordCheckBoxButton = ({
  handleClickButton,
  customClassName,
  customSize,
  isActive,
  isDisabled,
  isInactive,
}: IcheckBoxButton) => {
  const customClassNameStyles = customClassName ? customClassName : "";
  const className = `checkBoxButton ${customClassNameStyles} ${isActive} ${isDisabled} ${isInactive}`;
  const validateHandleClickButton =
    isDisabled === "disabled" ? undefined : handleClickButton;
  return (
    <div
      id="checkBoxButton"
      className={className.trim()}
      onClick={validateHandleClickButton}
    >
      <BordCheckBoxSvg
        customSize={customSize}
        isDisabled={isActive}
        isActive={isDisabled}
        isInactive={isInactive}
      />
    </div>
  );
};

export default BordCheckBoxButton;
