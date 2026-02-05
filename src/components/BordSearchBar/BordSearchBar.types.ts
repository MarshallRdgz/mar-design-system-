import { TformComponentsStandardSizes } from "../../types/global.types";

export interface IBordSearchBar {
  handleChange: (inputText: string) => void;
  placeholder: string;
  hasDeleteButton?: boolean;
  label?: string;
  customClassName?: string;
  componentSize?: string;
  isDeactivated?: boolean;
  isFilled?: boolean;
  includeMagnifierIcon?: boolean;
  includeDropdownArrowIcon?: boolean;
  customIcon?: JSX.Element;
  handleBlur?: () => void;
  defaultValue?: string;
  customInputClass?: string;
  customSearchBarContainer?: string;
  standardSize?: TformComponentsStandardSizes;
  loading?: boolean;
}
