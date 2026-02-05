export interface IrawSelectOption {
    name: string;
    value?: string;
    id?: string | number;
    icon?: string | null;
    isActive?: boolean;
}
export type TFlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
export interface IBordFiltersExpandableSelect {
    filterTitle: string;
    openSelectStatus: boolean;
    openSelectFunction: React.Dispatch<React.SetStateAction<boolean>>;
    rawSelectOptions: IrawSelectOption[];
    handleChangeSelectedOption: (selectedOption: IrawSelectOption) => void;
    isFilterActive?: boolean;
    flexDirection?: TFlexDirection;
}
