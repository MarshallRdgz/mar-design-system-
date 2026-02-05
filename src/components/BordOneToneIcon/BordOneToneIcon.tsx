import React, { ComponentProps } from 'react';
import { TbordOneToneIcon } from './BordOneToneIcon.types';
import { listOfBordOneToneIcons } from './Icons/listOfBordOneToneIcons';

const BordOneToneIcon = ({
  variant,
  standardSize = 24,
  customWidth,
  style,
  ...rest
}: IbordOneToneIconProps) => {
  const iconComponent = listOfBordOneToneIcons[variant];

  const standardSizeStyle = `${(standardSize / 10).toFixed(1)}rem`;
  const iconWidth = customWidth || standardSizeStyle;

  return (
    <div className="bordOneToneIcon" style={{ ...style, width: iconWidth }}>
      {React.createElement(iconComponent, { ...rest })}
    </div>
  );
};

export default BordOneToneIcon;

export interface IbordOneToneIconProps extends ComponentProps<'svg'> {
  variant: TbordOneToneIcon;
  standardSize?: 12 | 14 | 16 | 20 | 24 | 32;
  customWidth?: string;
}
