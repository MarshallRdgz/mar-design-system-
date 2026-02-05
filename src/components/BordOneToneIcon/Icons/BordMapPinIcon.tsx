import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMapPinIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 10c0 7-9 13-9 13s-9-6-9-13c0-2.38695.94821-4.67613 2.63604-6.36396S9.61305 1 12 1c2.3869 0 4.6761.94821 6.364 2.63604C20.0518 5.32387 21 7.61305 21 10Z"
      />
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 13c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3s-3 1.34315-3 3c0 1.6569 1.3431 3 3 3Z"
      />
    </svg>
  );
};

export default BordMapPinIcon;
