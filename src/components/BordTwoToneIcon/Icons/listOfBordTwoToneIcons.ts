import { FunctionComponent } from "react";
import {
  BORD_TWO_TONE_ICONS,
  ITwoToneIconProps,
} from "../BordTwoToneIcon.types";
import BordTwoToneEmployeeIcon from "./BordTwoToneEmployeeIcon";
import BordTwoToneGlobalIcon from "./BordTwoToneGlobalIcon";
import BordTwoToneHelpCircleIcon from "./BordTwoToneHelpCircleIcon";
import BordTwoToneInventoryIcon from "./BordTwoToneInventoryIcon";
import BordTwoToneLogout1Icon from "./BordTwoToneLogout1Icon";
import BordTwoToneMenuSquareIcon from "./BordTwoToneMenuSquareIcon";
import BordTwoTonePieChartIcon from "./BordTwoTonePieChartIcon";
import BordTwoToneSettingsIcon from "./BordTwoToneSettingsIcon";
import BordTwoToneShoppingCartCheck2Icon from "./BordTwoToneShoppingCartCheck2Icon";
import BordTwoToneShoppingCartIcon from "./BordTwoToneShoppingCartIcon";
import BordTwoToneTrackingTruckIcon from "./BordTwoToneTrackingTruckIcon";
import BordTwoToneLaptopChargingIcon from "./BordTwoToneLaptopChargingIcon";
import BordTwoToneMacLaptopSettingsIcon from "./BordTwoToneMacLaptopSettingsIcon";
import BordTwoToneLaptopSettingsIcon from "./BordTwoToneLaptopSettingsIcon";
import BordTwoToneComputerIcon from "./BordTwoToneComputerIcon";
import BordTwoToneComputerDeskIcon from "./BordTwoToneComputerDeskIcon";
import BordTwoToneHeadsetIcon from "./BordTwoToneHeadsetIcon";

export const listOfBordTwoToneIcons: {
  [key in BORD_TWO_TONE_ICONS]: FunctionComponent<ITwoToneIconProps>;
} = {
  employee: BordTwoToneEmployeeIcon,
  global: BordTwoToneGlobalIcon,
  helpCircle: BordTwoToneHelpCircleIcon,
  inventory: BordTwoToneInventoryIcon,
  logout1: BordTwoToneLogout1Icon,
  menuSquare: BordTwoToneMenuSquareIcon,
  pieChart: BordTwoTonePieChartIcon,
  settings: BordTwoToneSettingsIcon,
  shoppingCartCheck2: BordTwoToneShoppingCartCheck2Icon,
  shoppingCart: BordTwoToneShoppingCartIcon,
  trackingTruck: BordTwoToneTrackingTruckIcon,
  laptopCharging: BordTwoToneLaptopChargingIcon,
  macLaptopSettings: BordTwoToneMacLaptopSettingsIcon,
  laptopSettings: BordTwoToneLaptopSettingsIcon,
  computer: BordTwoToneComputerIcon,
  computerDesk: BordTwoToneComputerDeskIcon,
  headset: BordTwoToneHeadsetIcon,
};
