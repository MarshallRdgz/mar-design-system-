import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTrendingDownIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m23 18-9.5-9.5-5 5L1 6m22 12h-6m6 0v-6"
      />
    </svg>
  );
};

export default BordTrendingDownIcon;
