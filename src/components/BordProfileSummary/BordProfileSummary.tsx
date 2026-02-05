import type { FC } from 'react';
import BordAvatar from '../BordAvatar/BordAvatar';
import { IBordProfileSummaryProps } from './BordProfileSummary.types';
import '../BordProfileSummary/BordProfileSummary.scss';

const BordProfileSummary: FC<IBordProfileSummaryProps> = ({
  variant = 'circularWorld',
  imgUrl = null,
  title = 'Title',
  subTitle = 'Sub Title',
}) => {
  const defaultAvatar = <BordAvatar variant={variant} />;
  return (
    <div className="bordProfileSummary">
      {!imgUrl && defaultAvatar}
      {imgUrl && <img className="rounded-full" height={32} width={32} src={imgUrl} />}
      <div className="bordProfileSummaryTextContainer">
        <div className="bordProfileSummaryTitle">{title}</div>
        <div className="bordProfileSummarySubTitle">{subTitle}</div>
      </div>
    </div>
  );
};

export default BordProfileSummary;
