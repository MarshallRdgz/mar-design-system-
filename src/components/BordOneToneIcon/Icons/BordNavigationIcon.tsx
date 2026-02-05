import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordNavigationIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m3 11 19-9-9 19-2-8-8-2Z"
      />
    </svg>
  );
};

export default BordNavigationIcon;
