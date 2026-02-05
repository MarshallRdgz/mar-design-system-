import { IsidebarFilter, TupdateFiltersCallback } from '../../BordSidebarWithFilters.types';
import SuggestionFilter from './SuggestionFilter/SuggestionFilter';
import './SidebarSuggestionsFilters.scss';

const SidebarSuggestionsFilters = ({
  filters,
  updateFiltersCallback,
  sidebarSuggestionFiltersTitle,
  showSkeletonLoader = false,
}: {
  filters: IsidebarFilter[];
  sidebarSuggestionFiltersTitle: string;
  updateFiltersCallback: TupdateFiltersCallback;
  showSkeletonLoader?: boolean;
}) => {
  if (showSkeletonLoader) return <div className="sidebarSuggestionsFilters animationLoader" />;
  return (
    <div className="sidebarSuggestionsFilters">
      <div className="question">{sidebarSuggestionFiltersTitle}</div>
      <div className="suggestionFiltersSection">
        {filters.map(filterData => {
          return (
            <SuggestionFilter
              key={`dynamicFilter${filterData.filterIdentifier}`}
              updateFiltersCallback={updateFiltersCallback}
              filterData={filterData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SidebarSuggestionsFilters;
