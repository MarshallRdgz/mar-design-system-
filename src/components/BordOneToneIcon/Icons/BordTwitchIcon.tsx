import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTwitchIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 11V7m5 4V7m5-5H3v16h5v4l4-4h5l4-4V2Z"
      />
    </svg>
  );
};

export default BordTwitchIcon;
