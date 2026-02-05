import { ComponentProps } from 'react';
export type TbordilustrationIcon = 'wiping' | 'pieChart' | 'logout' | 'pin' | 'setting' | 'marketPlace' | 'search' | 'box' | 'warning' | 'danger' | 'success' | 'device' | 'store' | 'apple' | 'settingLaptop' | 'bordy' | 'specialMarketPlace3dFilledCart';
export declare enum BORD_ILUSTRATION_ICONS {
    'wiping' = "wiping",
    'pieChart' = "pieChart",
    'logout' = "logout",
    'pin' = "pin",
    'setting' = "setting",
    'marketPlace' = "marketPlace",
    'search' = "search",
    'box' = "box",
    'warning' = "warning",
    'danger' = "danger",
    'success' = "success",
    'device' = "device",
    'store' = "store",
    'apple' = "apple",
    'settingLaptop' = "settingLaptop",
    'bordy' = "bordy",
    'specialMarketPlace3dFilledCart' = "specialMarketPlace3dFilledCart"
}
export interface IBordIlustrationIconProps extends ComponentProps<'svg'> {
    variant: TbordilustrationIcon;
    standardSize?: 12 | 14 | 16 | 20 | 24 | 32 | 100;
    customWidth?: string;
}
