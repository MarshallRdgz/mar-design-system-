import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordShuffleIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 3h5m0 0v5m0-5L4 20m17-4v5m0 0h-5m5 0-6-6M4 4l5 5"
      />
    </svg>
  );
};

export default BordShuffleIcon;
