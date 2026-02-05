import { ComponentProps } from "react";
import { TformComponentsStandardSizes } from "../../types/global.types";
import { TbordOneToneIcon } from "../BordOneToneIcon/BordOneToneIcon.types";

export interface IBordTextInputProps extends ComponentProps<"input"> {
  placeholder: string;
  currentText?: string;
  setCurrentText?: (inputText: string) => void;
  standardSize?: TformComponentsStandardSizes;
  label?: string;
  caption?: string;
  isFilled: boolean;
  leftIconVariant?: TbordOneToneIcon;
  rightIconVariant?: TbordOneToneIcon;
  inputProps?: ComponentProps<"input">;
  labelProps?: ComponentProps<"div">;
  errorText?: string;
  showSkeletonLoader?: boolean;
  hideErrorText?: boolean;
  handleBlur?: (inputText: string) => void;
  setIsPassword?: (isShowPassword: boolean) => void;
  isPassword?: boolean;
  showPasswordIcon?: boolean;
}
