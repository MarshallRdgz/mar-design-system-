import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPauseIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 4h-4v16h4V4ZM10 4H6v16h4V4Z"
      />
    </svg>
  );
};

export default BordPauseIcon;
