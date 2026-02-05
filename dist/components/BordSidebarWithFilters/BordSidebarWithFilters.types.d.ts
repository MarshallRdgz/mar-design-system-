import { ComponentProps } from 'react';
import { IbordTextButton } from '../BordTextButton/BordTextButton';
export interface IbordSidebarWithFilersProps extends ComponentProps<'div'> {
    title: string;
    logoProps?: ComponentProps<'div'>;
    dynamicFilters: IsidebarFilter[];
    suggestionFilters: IsidebarFilter[];
    updateFiltersCallback: TupdateFiltersCallback;
    sidebarSuggestionFiltersTitle: string;
    cleanFiltersButtonProps?: IbordTextButton;
    loadingDynamicFilters?: boolean;
    loadingSuggestionFilters?: boolean;
}
export type TupdateFiltersCallback = (filterName: string, filterValue: string | number, filterLabel: string) => void;
export interface IsidebarFilter {
    filterIdentifier: string;
    filterName: string;
    filterValues: IsidebarFilterValue[];
}
export interface IsidebarFilterValue {
    label: string;
    value: string | number;
    isSelected?: boolean;
    isDisabled?: boolean;
    id?: number;
    description?: string;
}
