import { ComponentProps } from 'react';
import { TformComponentsStandardSizes } from '../../types/global.types';
import { TbordOneToneIcon } from '../BordOneToneIcon/BordOneToneIcon.types';

type THeight = 'auto' | '42';

export interface IBordButton extends ComponentProps<'button'> {
  label?: string;
  formId?: string;
  customClassName?: string;
  buttonIconOne?: TbordOneToneIcon;
  buttonIconTwo?: TbordOneToneIcon;
  customWidth?: TformComponentsStandardSizes;
  customHeight?: THeight;
  bordButtonStyle?: 'filled' | 'outlined';
  customFontSize?: string;
  disabled?: boolean;
  isLoading?: boolean;
  modeButton?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  standardSizeIcon?: 12 | 14 | 16 | 20 | 24 | 32;
}
