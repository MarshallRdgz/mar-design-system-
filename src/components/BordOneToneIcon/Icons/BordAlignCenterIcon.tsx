import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAlignCenterIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 10H6m15-4H3m18 8H3m15 4H6"
      />
    </svg>
  );
};

export default BordAlignCenterIcon;
