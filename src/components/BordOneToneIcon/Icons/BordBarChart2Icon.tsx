import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBarChart2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 20v-6m12 6V10m-6 10V4"
      />
    </svg>
  );
};

export default BordBarChart2Icon;
