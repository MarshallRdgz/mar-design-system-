import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordToggleRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 5H8c-3.86599 0-7 3.13401-7 7 0 3.866 3.13401 7 7 7h8c3.866 0 7-3.134 7-7 0-3.86599-3.134-7-7-7Z"
      />
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Z"
      />
    </svg>
  );
};

export default BordToggleRightIcon;
