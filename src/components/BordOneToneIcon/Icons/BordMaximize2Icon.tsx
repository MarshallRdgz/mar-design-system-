import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMaximize2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 21H3m0 0v-6m0 6 7-7m5-11h6m0 0v6m0-6-7 7"
      />
    </svg>
  );
};

export default BordMaximize2Icon;
