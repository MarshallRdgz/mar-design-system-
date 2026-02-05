import { IrawSelectOption } from '../BordFiltersExpandableSelect/BordFiltersExpandableSelect.types';

export interface IBordGenericSelectProps {
  selectOptions: JSX.Element[];
  changeSelectedOption: React.Dispatch<React.SetStateAction<IrawSelectOption>>;
  defaultValue: string;
  changeOpenStatusFunction?: () => void;
  absolutePositionElement?: JSX.Element;
}
