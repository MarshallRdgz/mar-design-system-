import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordHashIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 15h16M4 9h16m-4-6-2 18M10 3 8 21"
      />
    </svg>
  );
};

export default BordHashIcon;
