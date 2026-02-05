import { IsidebarFilter, TupdateFiltersCallback } from '../../BordSidebarWithFilters.types';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import './SidebarFiltersSection.scss';

const SidebarFiltersSection = ({
  filters,
  updateFiltersCallback,
  showSkeletonLoader = false,
}: {
  filters: IsidebarFilter[];
  updateFiltersCallback: TupdateFiltersCallback;
  showSkeletonLoader?: boolean;
}) => {
  return (
    <div className="sidebarFiltersSection">
      {showSkeletonLoader && [0, 1, 2, 3].map(id => <SidebarFilter key={id} />)}
      {!showSkeletonLoader &&
        filters?.map(filterData => {
          return (
            <SidebarFilter
              key={`dynamicFilter${filterData.filterIdentifier}`}
              filterData={filterData}
              updateFiltersCallback={updateFiltersCallback}
              showSkeletonLoader={showSkeletonLoader}
            />
          );
        })}
    </div>
  );
};

export default SidebarFiltersSection;
