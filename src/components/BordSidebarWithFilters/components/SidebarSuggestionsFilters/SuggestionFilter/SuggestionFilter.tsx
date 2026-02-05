import { IsidebarFilter, TupdateFiltersCallback } from '../../../BordSidebarWithFilters.types';
import SidebarFilterValueOption from '../../SidebarFilterValueOption/SidebarFilterValueOption';
import './SuggestionFilter.scss';

const SuggestionFilter = ({
  filterData,
  updateFiltersCallback,
}: {
  filterData: IsidebarFilter;
  updateFiltersCallback: TupdateFiltersCallback;
}) => {
  const { filterIdentifier, filterName, filterValues } = filterData;

  const clickOptionCallback = (value: string | number, label: string) =>
    updateFiltersCallback(filterIdentifier, value, label);
  return (
    <div className="suggestionFilter">
      <div className="suggestionFilterName">{filterName}</div>
      <div className="filterOptionsContainer">
        {filterValues.map(filterValue => {
          return (
            <SidebarFilterValueOption
              key={`${filterValue?.label}`}
              filterValue={filterValue}
              clickOptionCallback={clickOptionCallback}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionFilter;
