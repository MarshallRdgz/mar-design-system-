import { IrawSelectOption, TFlexDirection } from "../BordFiltersExpandableSelect/BordFiltersExpandableSelect.types";
import { TbordOneToneIcon } from "../BordOneToneIcon/BordOneToneIcon.types";
export interface IModuleFilterInfo {
    title: string;
    openFunction: React.Dispatch<React.SetStateAction<boolean>>;
    openStatus: boolean;
    rawSelectOptions: IrawSelectOption[];
    handleChangeSelectedOption: (option: IrawSelectOption) => void;
    isFilterActive: boolean;
}
export interface BordFiltersProps {
    filtersTitle: string;
    filtersList: IModuleFilterInfo[];
    handleResetFilters: () => void;
    filtersActiveStyle: string;
    filtersContainerStyles: {
        [key: string]: string;
    };
    filterIcon?: TbordOneToneIcon;
    isLoading?: boolean;
    flexDirection?: TFlexDirection;
}
