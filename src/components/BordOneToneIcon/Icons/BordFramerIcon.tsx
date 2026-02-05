import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFramerIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 16V9h14V2H5l14 14h-7m-7 0h7m-7 0 7 7v-7"
      />
    </svg>
  );
};

export default BordFramerIcon;
