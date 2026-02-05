import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCheckIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6 9 17l-5-5"
      />
    </svg>
  );
};

export default BordCheckIcon;
