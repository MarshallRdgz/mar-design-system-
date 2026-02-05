import { useState } from 'react';
import BordOneToneIcon from '../../../../BordOneToneIcon/BordOneToneIcon';
import SidebarFilterValueOption from '../../SidebarFilterValueOption/SidebarFilterValueOption';
import { IsidebarFilter, TupdateFiltersCallback } from '../../../BordSidebarWithFilters.types';
import './SidebarFilter.scss';

const SidebarFilter = ({
  filterData,
  updateFiltersCallback,
  showSkeletonLoader,
}: {
  filterData?: IsidebarFilter;
  updateFiltersCallback?: TupdateFiltersCallback;
  showSkeletonLoader?: boolean;
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>();
  const { filterIdentifier, filterName, filterValues } = filterData || {};

  const sidebarFilterTitleIcon = isFilterOpen ? 'arrowHeadUp' : 'arrowHeadDown';
  const someFilterIsSelected = !!filterData?.filterValues?.some(filter => filter.isSelected);
  const showOpened = isFilterOpen || (someFilterIsSelected && typeof isFilterOpen === 'undefined');

  // These calculations are made in rem value // These calculations are made in rem valuess
  const closedHeight = 1.4;
  const oneOptionHeight = 2.1;
  const visibleOptions = (filterValues?.length || 0) + 1;
  const openHeight = visibleOptions * oneOptionHeight + closedHeight;
  const sidebarFilterHeight = showOpened ? openHeight : closedHeight;

  const loading = showSkeletonLoader || !filterData?.filterValues || !updateFiltersCallback;
  const skeletonClassnames = 'sidebarFilter mx-auto rounded-md animationLoader';

  const openOrCloseFilter = () => setIsFilterOpen(!isFilterOpen);

  const clickOptionCallback = (value: string | number, label: string) => {
    if (!updateFiltersCallback || !filterIdentifier) return;
    updateFiltersCallback(filterIdentifier, value, label);
  };

  if (loading) return <div className={skeletonClassnames} style={{ height: `${sidebarFilterHeight}rem` }} />;

  return (
    <div className="sidebarFilter" style={{ height: `${sidebarFilterHeight}rem` }}>
      <div className="sidebarFilterTitle" onClick={openOrCloseFilter}>
        <div className="sidebarFilterName">{filterName}</div>
        <BordOneToneIcon variant={sidebarFilterTitleIcon} standardSize={14} />
      </div>
      <div className="filterOptionsContainer">
        {filterValues?.map(filterValue => {
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

export default SidebarFilter;
