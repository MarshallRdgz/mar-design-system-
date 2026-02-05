import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordVolume1Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.54 8.46c.9374.93764 1.4639 2.2092 1.4639 3.535s-.5265 2.5974-1.4639 3.535M11 5 6 9H2v6h4l5 4V5Z"
      />
    </svg>
  );
};

export default BordVolume1Icon;
