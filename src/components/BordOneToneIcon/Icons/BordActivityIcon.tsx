import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordActivityIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 12h-4l-3 9L9 3l-3 9H2"
      />
    </svg>
  );
};

export default BordActivityIcon;
