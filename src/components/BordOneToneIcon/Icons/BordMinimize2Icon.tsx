import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMinimize2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 14h6m0 0v6m0-6-7 7m17-11h-6m0 0V4m0 6 7-7"
      />
    </svg>
  );
};

export default BordMinimize2Icon;
