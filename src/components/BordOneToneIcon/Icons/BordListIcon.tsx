import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordListIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 18h13M3 18h.01M8 12h13M3 12h.01M8 6h13M3 6h.01"
      />
    </svg>
  );
};

export default BordListIcon;
