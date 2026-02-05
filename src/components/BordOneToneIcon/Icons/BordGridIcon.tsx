import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGridIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 14h-7v7h7v-7ZM10 14H3v7h7v-7ZM21 3h-7v7h7V3ZM10 3H3v7h7V3Z"
      />
    </svg>
  );
};

export default BordGridIcon;
