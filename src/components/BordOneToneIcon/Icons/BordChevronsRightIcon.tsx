import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordChevronsRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m13 17 5-5-5-5M6 17l5-5-5-5"
      />
    </svg>
  );
};

export default BordChevronsRightIcon;
