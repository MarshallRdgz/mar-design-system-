import { ComponentProps } from 'react';
import { TcountryCode } from './BordFlag.types';
import { roundedFlags } from './RoundedFlags/roundedFlags';
import { squareFlags } from './SquareFlags/squareFlags';

const BordFlag = ({ country = 'zz', variant, standardSize = 12, customWidth }: IbordFlagProps) => {
  const flags = variant === 'circle' ? roundedFlags : squareFlags;

  const standardSizeStyle = `${(standardSize / 10).toFixed(1)}rem`;
  const flagWidth = customWidth || standardSizeStyle;

  return (
    <div className="bordFlag" style={{ width: flagWidth }}>
      {flags[country || 'zz']}
    </div>
  );
};

export default BordFlag;

export interface IbordFlagProps extends ComponentProps<'svg'> {
  country?: TcountryCode;
  variant: 'square' | 'circle';
  standardSize?: 12 | 16 | 20 | 24 | 32;
  customWidth?: string;
}
