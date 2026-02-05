import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordArrowDownRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7 7 10 10m0 0V7m0 10H7"
      />
    </svg>
  );
};

export default BordArrowDownRightIcon;
