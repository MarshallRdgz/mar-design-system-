import { ComponentProps, FunctionComponent } from 'react';
import BordWipingIcon from './BordWipingIcon';
import BordPieChartIcon from './BordPieChartIcon';
import BordLogoutIcon from './BordLogoutIcon';
import BordPinIcon from './BordPinIcon';
import BordSettingIcon from './BordSettingIcon';
import BordMarketPlaceIcon from './BordMarketPlaceIcon';
import BordSearchIcon from './BordSearchIcon';
import BordBoxIcon from './BordBoxIcon';
import BordWarningIcon from './BordWarningIcon';
import BordDangerIcon from './BordDangerIcon';
import BordSuccessIcon from './BordSuccessIcon';
import BordDeviceIcon from './BordDeviceIcon';
import BordStoreIcon from './BordStoreIcon';
import BordAppleIcon from './BordAppleIcon';
import BordSettingLaptopIcon from './BordSettingLaptopIcon';
import BordBodyIcon from './BordBordyIcon';
import SpecialMarketPlace3dFilledCart from './BordSpecialMarketPlace3dFilledCart';
import { BORD_ILUSTRATION_ICONS } from '../BordIlustration.types';

export const listOfBordIlustrationIcon: {
  [key in BORD_ILUSTRATION_ICONS]: FunctionComponent<ComponentProps<'svg'>>;
} = {
  wiping: BordWipingIcon,
  pieChart: BordPieChartIcon,
  logout: BordLogoutIcon,
  pin: BordPinIcon,
  setting: BordSettingIcon,
  marketPlace: BordMarketPlaceIcon,
  search: BordSearchIcon,
  box: BordBoxIcon,
  warning: BordWarningIcon,
  danger: BordDangerIcon,
  success: BordSuccessIcon,
  device: BordDeviceIcon,
  store: BordStoreIcon,
  apple: BordAppleIcon,
  settingLaptop: BordSettingLaptopIcon,
  bordy: BordBodyIcon,
  specialMarketPlace3dFilledCart: SpecialMarketPlace3dFilledCart,
};
