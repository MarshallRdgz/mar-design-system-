import { IbordSidebarButtonProps } from "./BordSidebarButton.types";
import { BordTwoToneIcon } from "..";
import { bordColorTheme } from "../../styles/constants";
import { useEffect, useState } from "react";
import "./BordSidebarButton.scss";

const BordSidebarButton = ({
  isSelected = false,
  isOpen = true,
  buttonText,
  buttonIcon,
  disabled,
  ...rest
}: IbordSidebarButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const selectedStyles = isSelected ? "selected" : "";
  const closedStyles = isOpen ? "" : "closed";
  const classnames = `bordSidebarButton ${selectedStyles} ${closedStyles}`;

  const getIconColors = () => {
    if (disabled) {
      return {
        tone1: bordColorTheme.disabled.fgSecondary,
        tone2: bordColorTheme.disabled.fgSecondary,
      };
    }
    if (isHovered) {
      return {
        tone1: bordColorTheme.content.default,
        tone2: bordColorTheme.content.default,
      };
    }
    if (isSelected) {
      return {
        tone1: bordColorTheme.primary.bgDefault,
        tone2: bordColorTheme.primary.bgDefault,
      };
    }
  };

  const iconColors = getIconColors();

  const startHover = () => setIsHovered(true);
  const stoptHover = () => setIsHovered(false);

  useEffect(() => {
    return () => setIsHovered(false);
  }, []);

  return (
    <button
      className={classnames}
      disabled={disabled}
      onMouseEnter={startHover}
      onMouseLeave={stoptHover}
      {...rest}
    >
      {buttonIcon && (
        <BordTwoToneIcon variant={buttonIcon} colorTones={iconColors} />
      )}
      {isOpen && buttonText}
    </button>
  );
};

export default BordSidebarButton;
