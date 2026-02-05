import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordArrowUpRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 17 17 7m0 0H7m10 0v10"
      />
    </svg>
  );
};

export default BordArrowUpRightIcon;
