import { BordFiltersProps } from "./BordFilters.types";
import BordFiltersExpandableSelect from "../BordFiltersExpandableSelect/BordFiltersExpandableSelect";
import "./BordFilters.scss";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
const BordFilters = ({
  filtersList,
  filtersTitle,
  handleResetFilters,
  filtersActiveStyle,
  filtersContainerStyles,
  filterIcon,
  isLoading,
  flexDirection = "row",
}: BordFiltersProps) => {
  const skeletonLoaderClassnames = `bordFiltersSkeletonLoader animationLoader`;

  if (isLoading) {
    return <div className={skeletonLoaderClassnames} />;
  }
  return (
    <section className="bordFilters">
      <div
        className={`bordFiltersIconContainer ${filtersActiveStyle}`}
        onClick={handleResetFilters}
      >
        {filterIcon && (
          <BordOneToneIcon variant={filterIcon} standardSize={12} />
        )}
        <div className="filtersTitle">{filtersTitle}</div>
      </div>
      <div className="filtersContainer" style={filtersContainerStyles}>
        {filtersList.map((filter, i) => {
          return (
            <BordFiltersExpandableSelect
              key={`filter-${i}-${filter.title.replace(" ", "")}`}
              filterTitle={filter.title}
              openSelectStatus={filter.openStatus}
              openSelectFunction={filter.openFunction}
              rawSelectOptions={filter.rawSelectOptions}
              handleChangeSelectedOption={filter.handleChangeSelectedOption}
              isFilterActive={filter.isFilterActive}
              flexDirection={flexDirection}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BordFilters;
