import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLockIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 11V7c0-1.32608.52678-2.59785 1.46447-3.53553C9.40215 2.52678 10.6739 2 12 2c1.3261 0 2.5979.52678 3.5355 1.46447C16.4732 4.40215 17 5.67392 17 7v4M5 11h14c1.1046 0 2 .8954 2 2v7c0 1.1046-.8954 2-2 2H5c-1.10457 0-2-.8954-2-2v-7c0-1.1046.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordLockIcon;
