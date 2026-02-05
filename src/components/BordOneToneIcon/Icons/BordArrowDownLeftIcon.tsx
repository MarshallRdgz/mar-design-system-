import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordArrowDownLeftIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 7 7 17m0 0h10M7 17V7"
      />
    </svg>
  );
};

export default BordArrowDownLeftIcon;
