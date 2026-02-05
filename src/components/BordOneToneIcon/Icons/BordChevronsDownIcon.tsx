import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordChevronsDownIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 13 5 5 5-5M7 6l5 5 5-5"
      />
    </svg>
  );
};

export default BordChevronsDownIcon;
