import type { FC } from 'react';
import { IBordEmptyStateProps } from './BordEmptyState.types';
import BordIlustrationIcon from '../BordIlustrationIcon/BordIlustrationIcon';
import { BordButton } from '../BordButton/BordButton';
import BordTwoToneIcon from '../BordTwoToneIcon/BordTwoToneIcon';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import '../BordEmptyState/BordEmptyState.scss';

const BordEmptyState: FC<IBordEmptyStateProps> = ({
  title = 'title',
  subTitle,
  customClassNameSubTitle,
  buttonOneProps,
  buttonTwoProps,
  ilustrationIconProps,
  oneToneIconProps,
  twoToneIconProps,
}) => {
  const defaultIcon = 'search';
  const defaultStandardSize = 100;

  const getIlustration = () => {
    if (ilustrationIconProps) return <BordIlustrationIcon {...ilustrationIconProps} />;
    if (twoToneIconProps) return <BordTwoToneIcon {...twoToneIconProps} />;
    if (oneToneIconProps) return <BordOneToneIcon {...oneToneIconProps} />;
    return <BordIlustrationIcon standardSize={defaultStandardSize} variant={defaultIcon} />;
  };

  const ilustration = getIlustration();
  return (
    <div className="bordEmptyStateContainer">
      {ilustration}
      <div className="titleAndSubTitleContainer">
        <div className="title">{title}</div>
        {subTitle && <div className={`subTitle ${customClassNameSubTitle}`}>{subTitle}</div>}
      </div>
      <div className="buttonsContainer">
        {buttonOneProps && <BordButton {...buttonOneProps} />}
        {buttonTwoProps && <BordButton {...buttonTwoProps} />}
      </div>
    </div>
  );
};

export default BordEmptyState;
