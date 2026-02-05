import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordVolumeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 5 6 9H2v6h4l5 4V5Z"
      />
    </svg>
  );
};

export default BordVolumeIcon;
