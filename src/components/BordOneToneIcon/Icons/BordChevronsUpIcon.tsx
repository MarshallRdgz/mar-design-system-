import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordChevronsUpIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17 18-5-5-5 5m10-7-5-5-5 5"
      />
    </svg>
  );
};

export default BordChevronsUpIcon;
