import { ComponentProps } from 'react';
import { TcountryCode } from './BordFlag.types';
declare const BordFlag: ({ country, variant, standardSize, customWidth }: IbordFlagProps) => import("react/jsx-runtime").JSX.Element;
export default BordFlag;
export interface IbordFlagProps extends ComponentProps<'svg'> {
    country?: TcountryCode;
    variant: 'square' | 'circle';
    standardSize?: 12 | 16 | 20 | 24 | 32;
    customWidth?: string;
}
