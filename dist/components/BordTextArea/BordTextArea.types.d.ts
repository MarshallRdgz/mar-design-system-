import { ComponentProps } from "react";
import { TbordOneToneIcon } from "../BordOneToneIcon/BordOneToneIcon.types";
export interface IBordTextAreaProps extends ComponentProps<"div"> {
    label?: string;
    placeholder: string;
    name?: string;
    rows?: number;
    cols?: number;
    leftIconVariant?: TbordOneToneIcon;
    customWidth?: string;
    filled?: boolean;
    errorText?: string;
    hideError?: boolean;
    isDisabled?: boolean;
    setInputValue?: (inputText: string) => void;
    value?: string;
    captionText?: string;
    maxLength?: number;
    isLoading?: boolean;
}
