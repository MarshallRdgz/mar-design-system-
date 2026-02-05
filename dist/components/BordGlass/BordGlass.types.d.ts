import { HTMLAttributes, ReactElement } from "react";
export interface IBordGlassProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactElement;
    customClassName: string;
}
