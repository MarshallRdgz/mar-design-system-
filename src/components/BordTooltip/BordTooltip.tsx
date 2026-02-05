import { FC, ReactNode } from 'react';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import { BordButton } from '../BordButton/BordButton';
import { CTA_TYPE, IBordTooltipProps } from './BordTooltip.type';

import '../BordTooltip/BordTooltip.scss';

const BordTooltip: FC<IBordTooltipProps> = ({
  message,
  position = 'top',
  children,
  ctaType = CTA_TYPE.noCta,
  ctaLabel,
  oneCtaVariant,
  ctaAction,
  ctaButtonOneLabel,
  ctaButtonOneAction,
  ctaButtonTwoLabel,
  ctaButtonTwoAction,
}) => {
  const positionClasses: { [key: string]: string } = {
    top: 'tooltipTop',
    bottom: 'tooltipBottom',
    left: 'tooltipLeft',
    right: 'tooltipRight',
  };

  const oneCtaVariantDefault = 'arrowRightCircle';

  const ctaComponents: { [key in CTA_TYPE]: ReactNode } = {
    [CTA_TYPE.noCta]: null,
    [CTA_TYPE.oneCta]: (
      <div className="oneCta" onClick={ctaAction}>
        <div>{ctaLabel}</div>
        <BordOneToneIcon variant={oneCtaVariant ?? oneCtaVariantDefault} customWidth="1.5rem" />
      </div>
    ),
    [CTA_TYPE.twoCta]: (
      <div className="twoCta">
        <BordButton
          modeButton="tertiary"
          customFontSize="1.2rem"
          customClassName="whitespace-nowrap w-full"
          onClick={ctaButtonOneAction}
          label={ctaButtonOneLabel}
        />
        <BordButton
          bordButtonStyle="outlined"
          customFontSize="1.2rem"
          customClassName="whitespace-nowrap w-full"
          onClick={ctaButtonTwoAction}
          label={ctaButtonTwoLabel}
        />
      </div>
    ),
  };

  return (
    <div className="relative group flex w-max">
      {children}
      <div className={`bordTooltipMessageContainer ${positionClasses[position]}`}>
        <div className="messageText">{message}</div>
        {ctaType !== CTA_TYPE.noCta && <div className="ctaDivider" />}
        {ctaComponents[ctaType]}
      </div>
    </div>
  );
};

export default BordTooltip;
