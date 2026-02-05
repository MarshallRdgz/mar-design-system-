import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUnlockIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 10.9999V6.99991c-.00125-1.23995.45828-2.43613 1.28937-3.35633.8311-.9202 1.97443-1.49877 3.20813-1.62338 1.2337-.12462 2.4696.21361 3.468.94902.9983.73541 1.6878 1.81554 1.9345 3.03069M5 10.9999h14c1.1046 0 2 .8954 2 2v7c0 1.1046-.8954 2-2 2H5c-1.10457 0-2-.8954-2-2v-7c0-1.1046.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordUnlockIcon;
