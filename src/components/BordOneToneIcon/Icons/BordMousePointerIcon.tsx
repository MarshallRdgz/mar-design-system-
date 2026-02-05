import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMousePointerIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m13 13 6 6M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3Z"
      />
    </svg>
  );
};

export default BordMousePointerIcon;
