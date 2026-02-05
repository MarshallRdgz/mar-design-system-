import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBarChartIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 20v-4m6 4V10m6 10V4"
      />
    </svg>
  );
};

export default BordBarChartIcon;
