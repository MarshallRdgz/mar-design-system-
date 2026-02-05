import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordZapIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
      />
    </svg>
  );
};

export default BordZapIcon;
