import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordShare2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98M21 19c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3ZM9 12c0 1.6569-1.34315 3-3 3s-3-1.3431-3-3 1.34315-3 3-3 3 1.3431 3 3Zm12-7c0 1.65685-1.3431 3-3 3s-3-1.34315-3-3 1.3431-3 3-3 3 1.34315 3 3Z"
      />
    </svg>
  );
};

export default BordShare2Icon;
