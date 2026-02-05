import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordArrowUpIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19V5m0 0-7 7m7-7 7 7"
      />
    </svg>
  );
};

export default BordArrowUpIcon;
