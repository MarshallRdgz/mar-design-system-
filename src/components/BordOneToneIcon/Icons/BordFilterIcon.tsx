import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFilterIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"
      />
    </svg>
  );
};

export default BordFilterIcon;
