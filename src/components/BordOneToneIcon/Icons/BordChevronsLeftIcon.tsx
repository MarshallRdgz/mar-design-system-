import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordChevronsLeftIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m11 17-5-5 5-5m7 10-5-5 5-5"
      />
    </svg>
  );
};

export default BordChevronsLeftIcon;
