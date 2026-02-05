import { ComponentProps } from "react";
export interface IBordCheckBoxSvgProps extends ComponentProps<"svg"> {
    size?: 16 | 20 | 32 | 48 | 64 | 80 | 320;
    customSize?: string;
    fillCircle?: string;
    svgProps?: ComponentProps<"svg">;
    isActive?: string;
    isDisabled?: string;
    isInactive?: string;
}
export interface IcheckBoxButton extends ComponentProps<"button"> {
    isButtonActive?: boolean;
    isButtonDisabled?: boolean;
    customClassName?: string;
    customSize?: string;
    disabled?: boolean;
    isActive?: string;
    isDisabled?: string;
    isInactive?: string;
    handleClickButton?: () => void;
}
export interface IBordCheckBoxProps extends ComponentProps<"div"> {
    label?: string;
    isButtonActive?: boolean;
    isButtonDisabled?: boolean;
    customSize?: string;
    labelProps?: ComponentProps<"p">;
    handleClickButton?: () => void;
}
