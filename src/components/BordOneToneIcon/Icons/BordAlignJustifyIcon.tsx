import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAlignJustifyIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 18H3m18-4H3m18-4H3m18-4H3"
      />
    </svg>
  );
};

export default BordAlignJustifyIcon;
