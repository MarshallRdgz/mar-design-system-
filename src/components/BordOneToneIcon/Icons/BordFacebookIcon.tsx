import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFacebookIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 2h-3c-1.3261 0-2.5979.52678-3.5355 1.46447C10.5268 4.40215 10 5.67392 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7c0-.26522.1054-.51957.2929-.70711C14.4804 6.10536 14.7348 6 15 6h3V2Z"
      />
    </svg>
  );
};

export default BordFacebookIcon;
