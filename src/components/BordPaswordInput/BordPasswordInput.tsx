import { useEffect, useState } from "react";
import BordTextInput from "../BordTextInput/BordTextInput";
import { IBordPasswordInputProps } from "./BordPasswordInput.types";
import "./BordPasswordInput.scss";
const BordPasswordInput = ({
  label,
  disabled,
  placeholder = "Password",
  errorText,
  hideErrorText,
  setCurrentValue,
}: IBordPasswordInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  useEffect(() => {
    if (isShowPassword) {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  }, [isShowPassword]);
  return (
    <div className="bordPasswordInput">
      <BordTextInput
        setCurrentText={setCurrentValue}
        label={label}
        placeholder={placeholder}
        isFilled={false}
        inputProps={{
          type: typeInput,
        }}
        disabled={disabled}
        setIsPassword={setIsShowPassword}
        isPassword={isShowPassword}
        errorText={errorText}
        hideErrorText={hideErrorText}
        showPasswordIcon
      />
    </div>
  );
};

export default BordPasswordInput;
