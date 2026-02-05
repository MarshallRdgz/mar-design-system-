import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordSkipBackIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 19V5m14 15L9 12l10-8v16Z"
      />
    </svg>
  );
};

export default BordSkipBackIcon;
