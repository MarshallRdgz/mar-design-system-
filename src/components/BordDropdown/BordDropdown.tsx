import { useCallback, useEffect, useRef, useState, JSX } from "react";
import BordOneToneIcon from "../BordOneToneIcon/BordOneToneIcon";
import BordSearchBar from "../BordSearchBar/BordSearchBar";
import { IBordDropdown } from "./BordDropdown.types";
import "./BordDropdown.scss";

/**
 * IMPORTANT: if the styles of the implementation you are going to make of this component differs significantly from the design system options, DONT MODIFY THIS COMPONENT, use the customClassname, componentStyles, dropdownStyles, dropdownOptionsListStyles properties to customized it.
 * IMPORTANT: for the formDropdownOptionsCallback each of the returned options in the returned array should have the className "optionContainer" to inherit the default styles for the options UI.
 * IMPORTANT: for the formDropdownOptionsCallback each of the returned options should include as the onClick prop the logic to select the option, ie updated the current option with the newly selected value
 * @property {T[]} rawOptions : Optional, an array of all the possible values from which select. The type of the elements in the array must be the same for all, but can be anything required by the instance of this component. This type is the same one expected in the formDropdownOptionsCallback and filterBySearchStringCallback
 * @property { (rawOptions: T[], clickOptionCallback: (option: T) => void) => JSX.Element[], searchString?: string } formDropdownOptionsCallback : a function that maps the rawOptions array to an array of JSX.Element that will be displayed as the options for dropdown
 * @property { (rawSelectedOption: T) => JSX.Element } formSelectedOptionUICallback : a function that forms the UI to show when the dropdown is closed starting from the raw value of the selected option
 * @property { (search: string, rawOptions: T[]) => T[] } filterBySearchStringCallback : a function that implements the filtering logic using the search string of the dropdown. Must return an array of elements with the same type used in the elements of the rawOptions property, or an empty array if no results are found.
 * @property { (...args: (number | string)[]) => void } dropdownCloseCallback : a function callback to execute upon closing the dropdown
 * @property { T } currentValue : the current selected value, it is this value that updates upon clicking on an option in the dropdown. Must be of the same type used for the elements of the rawOptions array
 * @property {string} componentSize : Optional, one of the standard sizes for the components, corresponding to one of the following words: "extra-small", "small", "medium" or "large". If no value is passed the component will have the width of its parent container.
 * @property {string} customClassname : Optional, a string classname to provide customizing styles.
 * @property {string} customPlaceholder : Optional, the desired text when the dropdown is closed and no option has been selected yet. Default is the text "Elige una opción"
 * @property {boolean} isFilled : Optional, a boolean indicating if the dropdown component must have filled styles or not.
 * @property {boolean} isFocused : Optional, a boolean indicating if the dropdown component must show the focused styles or not.
 * @property {boolean} includeMagnifierIcon : Optional, a boolean indicating if the dropdown component should have a magnifier icon on the left or not. DEFAULT is true
 * @property {JSX.Element} customIcon : Optional, a custom icon to show on the dropdown closed UI, if this is passed it replaces the magnifier ico
 * @property {string} label : Optional, a label for the select input.
 * @property {string} caption : Optional, a caption to shown at the components bottom.
 * @property {string} errorText : Optional, the text to be shown if theres an error with the component or its current selected value. If an error is passed the style of the component will change to reflect that.
 * @property {boolean} showSkeletonLoader - Optional,a  boolean indicating if the component is loading and therefore the skeleton loader is to be shown. Default is false.
 * @property {boolean} isDeactivated : Optional, boolean indicating if the dropdown input is deactivated. If a value is provided the input will behave as a read only field and styles will be accordingly.
 * @property {{[key:string]: string}} componentStyles : an object with valid styles to be used as the value for the style property of the parent component. Use it to customized the NudosSearchbarDropdown component.
 * @property {{[key:string]: string}} dropdownStyles : an object with valid styles to be used as the value for the style property of the open dropdown section. Use it to customized the NudosSearchbarDropdown component.
 * @property {{[key:string]: string}} dropdownOptionsListStyles : an object with valid styles to be used as the value for the style property of the dropdown options list. Use it to customized the NudosSearchbarDropdown component.
 * @property {boolean} closesOnClickOutside : Optional, a boolean indicating if the dropdown closes when clicked outside. If no value is pause the default is true, with the select value being updated to the default.
 * @property {boolean} closesOnChangeSelection : Optional, a boolean indicating if the dropdown closes when the selected option(s) change. If no value is pause the default is true.
 * @property {string} hideErrorText : Optional, if the dropdown is part of another component that shows an error text, used this boolean to prevent from repeating the error text.
 */
const BordDropdown = <T,>({
  label,
  caption,
  isFilled,
  errorText,
  isFocused,
  rawOptions,
  customIcon,
  customLabel,
  openDropdown = false,
  currentValue,
  hideErrorText,
  componentSize,
  isDeactivated = false,
  dropdownStyles,
  componentStyles,
  customClassname,
  customInputClass,
  customPlaceholder,
  alternativeStyling,
  showSkeletonLoader = false,
  includeMagnifierIcon = true,
  closesOnClickOutside = true,
  closesOnChangeSelection = true,
  dropdownOptionsListStyles,
  dropdownCloseCallback,
  formDropdownOptionsCallback,
  formSelectedOptionUICallback,
  filterBySearchStringCallback,
}: IBordDropdown<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredRawOptions, setFilteredRawOptions] = useState<T[]>([]);
  const [dropdownSelectOptions, setDropdownSelectOptions] = useState<
    JSX.Element[]
  >([]);
  const [searchString, setSearchString] = useState("");

  const refContainer = useRef<HTMLDivElement>(null);

  const customClassnameStyle = customClassname ? customClassname : "";
  const componentSizeStyle = componentSize || "";
  const deactivatedStyles = isDeactivated ? "deactivated" : "";
  const filledStyles = isFilled ? "filled" : "";
  const focusedStyles = isDropdownOpen || isFocused ? "focused" : "";
  const errorStyles = errorText && errorText.length > 0 ? "error" : "";
  const alternativeStylingClassname = alternativeStyling || "";
  const componentClassnames = `bordDropdown ${customClassnameStyle} ${componentSizeStyle} ${deactivatedStyles} ${filledStyles} ${errorStyles} ${focusedStyles} ${alternativeStylingClassname}`;
  const skeletonLoaderClassnames = `bordDropdownSkeletonLoader ${
    componentSizeStyle || "extraSmall"
  } ${alternativeStylingClassname}`;
  const placeholderDefault = "Buscar";

  const openDropDownList = () => !isDeactivated && setIsDropdownOpen(true);
  const closeDropDown = () => {
    if (dropdownCloseCallback) {
      dropdownCloseCallback();
    }
    setIsDropdownOpen(false);
    setSearchString("");
  };

  const closeDropdownOnSelection = () =>
    closesOnChangeSelection && closeDropDown();

  const handleClickSelect = () => !isDropdownOpen && openDropDownList();

  const currentValueUI = currentValue
    ? formSelectedOptionUICallback(currentValue)
    : undefined;

  const includeMagnifierIconStyles = includeMagnifierIcon
    ? { display: "flex" }
    : undefined;

  const onHandleClickAway = useCallback(
    async (e: MouseEvent) => {
      if (
        refContainer.current &&
        isDropdownOpen &&
        !refContainer.current.contains(e.target as Node)
      ) {
        if (closesOnClickOutside) {
          closeDropDown();
        }
      }
    },
    [refContainer, isDropdownOpen, closeDropDown]
  );

  const getSkeletonLoader = () => {
    return (
      <div className={skeletonLoaderClassnames}>
        {label && <div className="componentLabel truncate">{label}</div>}
        <div className="componentDropdown">
          <div className="closedDropdownSkeletonLoader animationLoader" />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (openDropdown && !isDropdownOpen) {
      openDropDownList();
    }
  }, [openDropdown]);

  useEffect(() => {
    window.addEventListener("mousedown", onHandleClickAway);
    return () => {
      window.removeEventListener("mousedown", onHandleClickAway);
    };
  }, [onHandleClickAway]);

  useEffect(() => {
    const newDropdownOptions = formDropdownOptionsCallback(
      filteredRawOptions,
      closeDropdownOnSelection,
      searchString
    );
    setDropdownSelectOptions(newDropdownOptions);
  }, [filteredRawOptions]);

  useEffect(() => {
    if (!searchString) return setFilteredRawOptions(rawOptions);
    const newFilteredOptions = filterBySearchStringCallback(
      searchString,
      rawOptions
    );
    setFilteredRawOptions(newFilteredOptions);
  }, [searchString, rawOptions]);

  return (
    <>
      {showSkeletonLoader && getSkeletonLoader()}
      {!showSkeletonLoader && (
        <div className={componentClassnames}>
          {label && (
            <div className={`componentLabel truncate ${customLabel || ""}`}>
              {label}
            </div>
          )}
          <div
            className="componentDropdown"
            ref={refContainer}
            onClick={handleClickSelect}
          >
            {!isDropdownOpen && (
              <div className="closedDropdown" style={componentStyles}>
                <div
                  className="currentValueOrplaceholder"
                  style={includeMagnifierIconStyles}
                >
                  {includeMagnifierIcon && !customIcon && (
                    <BordOneToneIcon
                      variant="search"
                      className="magnifierIcon"
                      standardSize={14}
                    />
                  )}
                  {customIcon || null}
                  {currentValueUI || customPlaceholder || "Elige una opción"}
                </div>
                {!isDropdownOpen && (
                  <BordOneToneIcon variant="arrowHeadDown" standardSize={14} />
                )}
              </div>
            )}
            {isDropdownOpen && !isDeactivated && (
              <div className="openDropdownInput" style={componentStyles}>
                <BordSearchBar
                  customInputClass={customInputClass}
                  handleChange={setSearchString}
                  placeholder={customPlaceholder ?? placeholderDefault}
                  defaultValue={searchString}
                  isFilled={!!searchString}
                  customIcon={customIcon}
                  includeMagnifierIcon={includeMagnifierIcon}
                  includeDropdownArrowIcon
                  isDeactivated={isDeactivated}
                  label=''
                />
                <div className="openDropdown" style={dropdownStyles}>
                  <div
                    className="dropdownOptionsList"
                    style={dropdownOptionsListStyles}
                  >
                    {dropdownSelectOptions}
                  </div>
                </div>
              </div>
            )}
          </div>
          {errorText && !hideErrorText && errorText.length > 0 && (
            <div className="errorText">{errorText}</div>
          )}
          {caption && !errorText && <div className="caption">{caption}</div>}
        </div>
      )}
    </>
  );
};

export default BordDropdown;




