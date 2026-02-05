import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTypeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 20h6M4 7V4h16v3m-8-3v16"
      />
    </svg>
  );
};

export default BordTypeIcon;
