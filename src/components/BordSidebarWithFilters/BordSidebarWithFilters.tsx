import { IbordSidebarWithFilersProps } from './BordSidebarWithFilters.types';
import SidebarLogo from './components/SidebarLogo/SidebarLogo';
import SidebarFiltersSection from './components/SidebarDynamicFilters/SidebarFiltersSection';
import SidebarSuggestionsFilters from './components/SidebarSuggestionsFilters/SidebarSuggestionsFilters';
import BordTextButton from '../BordTextButton/BordTextButton';
import { bordColorTheme } from '../../styles/constants';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import './BordSidebarWithFilters.scss';

const BordSidebarWithFilters = ({
  title,
  logoProps,
  dynamicFilters,
  suggestionFilters,
  updateFiltersCallback,
  sidebarSuggestionFiltersTitle,
  cleanFiltersButtonProps,
  loadingDynamicFilters,
  loadingSuggestionFilters,
  ...rest
}: IbordSidebarWithFilersProps) => {
  const classnames = `bordSidebarWithFilters`;

  const isOpen = true;
  const clearFiltersButtonColor = isOpen ? bordColorTheme.content.secondary : bordColorTheme.disabled.fgSecondary;

  return (
    <div className={classnames} {...rest}>
      <SidebarLogo isOpen={isOpen} {...logoProps} />
      <div className="filtersTitle">
        <BordOneToneIcon variant="filterMailCircle" stroke="white" customWidth="1.8rem" />
        <div className="title">{title}</div>
      </div>
      <SidebarFiltersSection
        filters={dynamicFilters}
        updateFiltersCallback={updateFiltersCallback}
        showSkeletonLoader={loadingDynamicFilters}
      />
      <SidebarSuggestionsFilters
        filters={suggestionFilters}
        updateFiltersCallback={updateFiltersCallback}
        sidebarSuggestionFiltersTitle={sidebarSuggestionFiltersTitle}
        showSkeletonLoader={loadingSuggestionFilters}
      />
      <BordTextButton
        text={'Clean filters'}
        textProps={{ style: { color: bordColorTheme.content.secondary } }}
        rightIconProps={{ variant: 'xCircle', standardSize: 14, stroke: clearFiltersButtonColor }}
        {...cleanFiltersButtonProps}
      />
    </div>
  );
};

export default BordSidebarWithFilters;
