import { ComponentProps } from "react";

export enum BORD_TWO_TONE_ICONS {
  "employee" = "employee",
  "global" = "global",
  "helpCircle" = "helpCircle",
  "inventory" = "inventory",
  "logout1" = "logout1",
  "menuSquare" = "menuSquare",
  "pieChart" = "pieChart",
  "settings" = "settings",
  "shoppingCartCheck2" = "shoppingCartCheck2",
  "shoppingCart" = "shoppingCart",
  "trackingTruck" = "trackingTruck",
  "laptopCharging" = "laptopCharging",
  "macLaptopSettings" = "macLaptopSettings",
  "laptopSettings" = "laptopSettings",
  "computer" = "computer",
  "computerDesk" = "computerDesk",
  "headset" = "headset",
}

export type TbordTwoToneIcon =
  | "employee"
  | "global"
  | "helpCircle"
  | "inventory"
  | "logout1"
  | "menuSquare"
  | "pieChart"
  | "settings"
  | "shoppingCartCheck2"
  | "shoppingCart"
  | "trackingTruck"
  | "laptopCharging"
  | "macLaptopSettings"
  | "laptopSettings"
  | "computer"
  | "computerDesk"
  | "headset";

export interface IBordTwoToneIconProps extends ComponentProps<"svg"> {
  variant: TbordTwoToneIcon;
  colorTones?: IcolorTones;
  standardSize?: 12 | 16 | 20 | 24 | 32;
  customWidth?: string;
}

export interface ITwoToneIconProps extends ComponentProps<"svg"> {
  colorTones?: IcolorTones;
}

export interface IcolorTones {
  tone1?: string;
  tone2?: string;
  opacity1?: string;
  opacity2?: string;
}
