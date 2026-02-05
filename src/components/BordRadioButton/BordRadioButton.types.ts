import { ComponentProps } from "react";

export interface IBordRadioButtonProps extends ComponentProps<"div"> {
  isButtonActive?: boolean;
  componentSize?: string;
  customWidth?: string;
  label?: string;
  labelProps?: ComponentProps<"p">;
  svgProps?: ComponentProps<"svg">;
  disabled?: boolean;
}

export interface IBordRadioButtonSvgProps extends ComponentProps<"svg"> {
  size?: 16 | 20 | 32 | 48 | 64 | 80 | 320;
  customSize?: string;
  fillCircle?: string;
  svgProps?: ComponentProps<"svg">;
  isActive?: string;
  isDisabled?: string;
  isInactive?: string;
}
