import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPlayIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 3 14 9-14 9V3Z"
      />
    </svg>
  );
};

export default BordPlayIcon;
