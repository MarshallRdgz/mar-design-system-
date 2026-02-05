import { IsidebarFilter, TupdateFiltersCallback } from '../../BordSidebarWithFilters.types';
import './SidebarFiltersSection.scss';
declare const SidebarFiltersSection: ({ filters, updateFiltersCallback, showSkeletonLoader, }: {
    filters: IsidebarFilter[];
    updateFiltersCallback: TupdateFiltersCallback;
    showSkeletonLoader?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default SidebarFiltersSection;
