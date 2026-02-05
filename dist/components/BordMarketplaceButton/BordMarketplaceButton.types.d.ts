import { ComponentProps } from "react";
export interface IBordMarketplaceButtonProps extends ComponentProps<"button"> {
    buttonText: string;
    buttonColor: 'light' | 'dark';
}
