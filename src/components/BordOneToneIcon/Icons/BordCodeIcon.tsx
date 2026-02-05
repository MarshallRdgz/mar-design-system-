import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCodeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16 18 6-6-6-6M8 6l-6 6 6 6"
      />
    </svg>
  );
};

export default BordCodeIcon;
