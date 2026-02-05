import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTrendingUpIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m23 6-9.5 9.5-5-5L1 18M23 6h-6m6 0v6"
      />
    </svg>
  );
};

export default BordTrendingUpIcon;
