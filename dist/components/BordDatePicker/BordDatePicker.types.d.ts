export interface IBordDatePickerProps {
    updateCurrentValueCallback: (inputText: string) => void;
    isFilled: boolean;
    defaultValue?: string;
    label?: string;
    desiredTimeZone?: number;
    errorText?: string;
    isDisabled?: boolean;
    hideErrorText?: boolean;
    debounceTime?: number;
    customWidth?: string;
    handleFocus?: () => void;
}
