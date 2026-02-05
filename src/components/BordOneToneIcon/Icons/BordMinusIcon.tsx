import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMinusIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 12h14"
      />
    </svg>
  );
};

export default BordMinusIcon;
