export interface IBordPasswordInputProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    errorText?: string;
    hideErrorText?: boolean;
    setCurrentValue?: (inputValue: string) => void;
}
