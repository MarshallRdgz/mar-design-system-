import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMenuIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 18h18M3 12h18M3 6h18"
      />
    </svg>
  );
};

export default BordMenuIcon;
