import type { FC } from 'react';
import { IBordToastProps, TOAST_VARIANTS } from './BordToast.type';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import { BordButton } from '../BordButton/BordButton';

import '../BordToast/BordToast.scss';

const BordToast: FC<IBordToastProps> = ({
  variant = 'informative',
  title = 'Alert Title',
  description = 'This is an optional description. It cam span multiple lines. It may not get read so provide good alert title',
  onClose,
  action,
  hideAction = false,
  actionLabel = 'action',
  animationTime = 2500,
  showAnimation = true,
}) => {
  const className = `toastContainer ${showAnimation ? 'toast-animation' : ''}  ${variant}`;

  const onAnimationEnd = () => {
    setTimeout(onClose ?? '', animationTime);
  };

  return (
    <div className={className} onAnimationEnd={onAnimationEnd}>
      <div className="flex justify-start items-start gap-16">
        <div>
          <BordOneToneIcon variant={TOAST_VARIANTS[variant]} customWidth="24px" />
        </div>
        <div className="toastData">
          <div>
            <div className="toastTitle">{title}</div>
            <div className="toastDescription">{description}</div>
          </div>
          {!hideAction && (
            <BordButton label={actionLabel} modeButton="tertiary" customFontSize="1.2rem" onClick={action} />
          )}
          <div className="cursor-pointer close-icon" onClick={onClose}>
            <BordOneToneIcon variant="x" customWidth="1.8rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BordToast;
