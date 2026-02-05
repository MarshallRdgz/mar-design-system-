import { IBordBreadCrumbProps } from './BordBreadCrumb.types';
import './BordBreadCrumb.scss';

const BordBreadCrumb = ({
  headerNavigationTitle: title,
  headerNavigationSubtitle: subtitle,
}: IBordBreadCrumbProps): JSX.Element => {
  const separator = subtitle ? ' / ' : '';

  const [firstSection, secondSection = ''] = title.includes('-')
    ? [title.split('-')[0], title.slice(title.indexOf('-'))]
    : [title];

  return (
    <div className="bordBreadCrumb">
      <div className="bordHeaderBreadCrumb">
        <span className="bordFirstSectionTitle">{firstSection}</span>
        <span className="bordSecondSectionTitle">{secondSection}</span>
      </div>
      <span className="separatorCharacter">{separator}</span>
      <span className="headerBordSubtitle">{subtitle}</span>
    </div>
  );
};

export default BordBreadCrumb;
