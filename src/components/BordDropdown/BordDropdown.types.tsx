export type TcomponentSize =
  | "xsSmall"
  | "extraSmall-74"
  | "extraSmall"
  | "small"
  | "small-184"
  | "medium"
  | "large"
  | "extraLarge"
  | "w256"
  | "w368"
  | "w-380"
  | "w-280"
  | "w-180"
  | "w-80";

export interface IBordDropdown<T> {
  label?: string;
  caption?: string;
  isFilled?: boolean;
  errorText?: string;
  isFocused?: boolean;
  customIcon?: JSX.Element;
  rawOptions: T[];
  customLabel?: string;
  openDropdown?: boolean;
  currentValue?: T;
  isDeactivated?: boolean;
  hideErrorText?: boolean;
  componentSize?: TcomponentSize;
  dropdownStyles?: { [key: string]: string };
  componentStyles?: { [key: string]: string };
  customClassname?: string;
  customInputClass?: string;
  customPlaceholder?: string;
  alternativeStyling?: "matchingBackground";
  showSkeletonLoader?: boolean;
  closesOnClickOutside?: boolean;
  includeMagnifierIcon?: boolean;
  closesOnChangeSelection?: boolean;
  dropdownOptionsListStyles?: { [key: string]: string };
  formDropdownOptionsCallback: (
    rawOptions: T[],
    clickOptionCallback?: (option: T) => void,
    searchString?: string
  ) => JSX.Element[];
  formSelectedOptionUICallback: (rawSelectedOption: T) => JSX.Element;
  filterBySearchStringCallback: (search: string, rawOptions: T[]) => T[];
  dropdownCloseCallback?: (...args: (number | string)[]) => void;
}


