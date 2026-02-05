import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordXIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 6 6 18M6 6l12 12"
      />
    </svg>
  );
};

export default BordXIcon;
