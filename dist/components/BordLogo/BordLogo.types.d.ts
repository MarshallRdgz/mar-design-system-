import { ComponentProps } from "react";
export interface IBordLogoProps extends ComponentProps<"svg"> {
    standardSize?: 20 | 32 | 48 | 64 | 80 | 320;
    customWidth?: string;
    colorLetters?: string;
    colorDot?: string;
}
