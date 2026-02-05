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
declare const BordDropdown: <T>({ label, caption, isFilled, errorText, isFocused, rawOptions, customIcon, customLabel, openDropdown, currentValue, hideErrorText, componentSize, isDeactivated, dropdownStyles, componentStyles, customClassname, customInputClass, customPlaceholder, alternativeStyling, showSkeletonLoader, includeMagnifierIcon, closesOnClickOutside, closesOnChangeSelection, dropdownOptionsListStyles, dropdownCloseCallback, formDropdownOptionsCallback, formSelectedOptionUICallback, filterBySearchStringCallback, }: IBordDropdown<T>) => import("react/jsx-runtime").JSX.Element;
export default BordDropdown;
