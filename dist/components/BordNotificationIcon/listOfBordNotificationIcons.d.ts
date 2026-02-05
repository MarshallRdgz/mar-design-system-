import { ComponentProps, FunctionComponent } from "react";
import { BORD_NOTIFICATION_ICONS } from "./IBordNotificationIconProps.types";
export declare const listOfBordNotificationIcons: {
    [key in BORD_NOTIFICATION_ICONS]: FunctionComponent<ComponentProps<'svg'>>;
};
