import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordSkipForwardIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 5v14M5 4l10 8-10 8V4Z"
      />
    </svg>
  );
};

export default BordSkipForwardIcon;
