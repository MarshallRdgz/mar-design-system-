import { ComponentProps } from 'react';
import { TbordOneToneIcon } from './BordOneToneIcon.types';
declare const BordOneToneIcon: ({ variant, standardSize, customWidth, style, ...rest }: IbordOneToneIconProps) => import("react/jsx-runtime").JSX.Element;
export default BordOneToneIcon;
export interface IbordOneToneIconProps extends ComponentProps<'svg'> {
    variant: TbordOneToneIcon;
    standardSize?: 12 | 14 | 16 | 20 | 24 | 32;
    customWidth?: string;
}
