import { useState, useEffect, SyntheticEvent } from "react";
import { IBordDatePickerProps } from "./BordDatePicker.types";
import useDebounce from "../../hooks/useDebounce";
import {
  convertSimpleDateToDateTimeZulu,
  formatDateToPicker,
} from "../../utils/formatDatesAndHours";
import "./BordDatePicker.scss";

const BordDatePicker = ({
  updateCurrentValueCallback,
  isFilled,
  defaultValue,
  desiredTimeZone,
  label,
  errorText,
  isDisabled,
  hideErrorText,
  debounceTime,
  handleFocus,
  customWidth = "100%",
}: IBordDatePickerProps) => {
  const [currentDate, setCurrentDate] = useState("");

  const debouncedDate =
    !!debounceTime && useDebounce(currentDate, debounceTime);
  const errorStyles = errorText && errorText.length ? "error" : "";
  const filledStyles =
    (isFilled || (currentDate && currentDate.length > 0)) && !isDisabled
      ? "filled"
      : "";
  const disabledStyles = isDisabled ? "disabled" : "";
  const classNameStyle = `bordDatePicker ${errorStyles} ${filledStyles} ${disabledStyles}`;

  const handleInputChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    const newDateTime = convertSimpleDateToDateTimeZulu(value, desiredTimeZone);
    const newSimpleDate = formatDateToPicker(newDateTime, desiredTimeZone);
    setCurrentDate(newSimpleDate || "");
    if (updateCurrentValueCallback && !debounceTime) {
      updateCurrentValueCallback(newDateTime);
    }
  };

  const handleUpdatedDate = () => {
    if (!debouncedDate || !updateCurrentValueCallback) return;

    const newDateTime = convertSimpleDateToDateTimeZulu(
      debouncedDate,
      desiredTimeZone
    );

    updateCurrentValueCallback(newDateTime);
  };

  useEffect(() => {
    handleUpdatedDate();
  }, [debouncedDate]);

  const setInitialDate = () => {
    if (currentDate) return;

    const formattedDefaultValue = formatDateToPicker(
      defaultValue,
      desiredTimeZone
    );

    setCurrentDate(formattedDefaultValue || "");
  };

  useEffect(() => {
    setInitialDate();
  }, [defaultValue]);

  return (
    <div className={classNameStyle} style={{ width: customWidth }}>
      {label && <label className="bordDatePickerLabel">{label}</label>}
      <input
        type="date"
        value={currentDate}
        readOnly={isDisabled}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
      {errorText && !hideErrorText && errorText.length > 0 && (
        <div className="errorText">{errorText}</div>
      )}
    </div>
  );
};

export default BordDatePicker;
