import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordSlidersIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 21v-5m-3 0h6M4 21v-7m-3 0h6m5 7v-9M9 8h6m5 4V3m-8 5V3m-8 7V3"
      />
    </svg>
  );
};

export default BordSlidersIcon;
