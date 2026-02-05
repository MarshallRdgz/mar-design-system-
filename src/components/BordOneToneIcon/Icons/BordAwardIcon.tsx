import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAwardIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12M19 8c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7Z"
      />
    </svg>
  );
};

export default BordAwardIcon;
