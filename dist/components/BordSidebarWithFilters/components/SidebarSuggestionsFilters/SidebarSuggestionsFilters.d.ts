import { IsidebarFilter, TupdateFiltersCallback } from '../../BordSidebarWithFilters.types';
import './SidebarSuggestionsFilters.scss';
declare const SidebarSuggestionsFilters: ({ filters, updateFiltersCallback, sidebarSuggestionFiltersTitle, showSkeletonLoader, }: {
    filters: IsidebarFilter[];
    sidebarSuggestionFiltersTitle: string;
    updateFiltersCallback: TupdateFiltersCallback;
    showSkeletonLoader?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default SidebarSuggestionsFilters;
