import { IsidebarFilter, TupdateFiltersCallback } from '../../../BordSidebarWithFilters.types';
import './SidebarFilter.scss';
declare const SidebarFilter: ({ filterData, updateFiltersCallback, showSkeletonLoader, }: {
    filterData?: IsidebarFilter;
    updateFiltersCallback?: TupdateFiltersCallback;
    showSkeletonLoader?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default SidebarFilter;
