import { ComponentProps } from "react";
export declare enum BORD_NOTIFICATION_ICONS {
    on = "on",
    off = "off"
}
export interface IBordNotificationIconProps extends ComponentProps<'svg'> {
    variant: "on" | "off";
    standardSize?: 20 | 32 | 48;
    customWidth?: string;
}
