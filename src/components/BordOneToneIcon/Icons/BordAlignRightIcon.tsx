import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAlignRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 18H7m14-4H3m18-4H7m14-4H3"
      />
    </svg>
  );
};

export default BordAlignRightIcon;
