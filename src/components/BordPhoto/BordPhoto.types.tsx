import { ComponentProps } from 'react';
import { IBordAvatarProps } from '../BordAvatar/BordAvatar.types';
import { IbordOneToneIconProps } from '../BordOneToneIcon/BordOneToneIcon';
import { IbordFlagProps } from '../BordFlag/BordFlag';
import { IbordToolModelMarkerProps } from '../BordToolModelMarker/BordToolModelMarker';

export type TBordPhotoSize = 's20' | 's32' | 's48' | 's56' | 's64' | 's100';

export interface IBordPhotoProps extends ComponentProps<'div'> {
  url?: string;
  variant?: 'circle' | 'square';
  size?: TBordPhotoSize;
  imageProps?: ComponentProps<'img'>;
  avatarProps?: IBordAvatarProps;
  oneToneIconProps?: IbordOneToneIconProps;
  flagProps?: IbordFlagProps;
  toolModelMarkerProps?: IbordToolModelMarkerProps;
}
