import { ComponentProps, FunctionComponent } from "react";
import BordNotificationOnIcon from "./components/BordNotificationOnIcon";
import BordNotificationOffIcon from "./components/BordNotificationOffIcon";
import { BORD_NOTIFICATION_ICONS } from "./IBordNotificationIconProps.types";

export const listOfBordNotificationIcons: { [key in BORD_NOTIFICATION_ICONS]: FunctionComponent<ComponentProps<'svg'>> } = {
    on: BordNotificationOnIcon,
    off: BordNotificationOffIcon,
};
