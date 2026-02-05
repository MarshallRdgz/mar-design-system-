import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordSendIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 2 11 13M22 2l-7 20-4-9M22 2 2 9l9 4"
      />
    </svg>
  );
};

export default BordSendIcon;
