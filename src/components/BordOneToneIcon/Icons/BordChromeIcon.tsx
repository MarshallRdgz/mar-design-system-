import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordChromeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.17 8H12m0 0c-2.20914 0-4 1.79086-4 4 0 2.2091 1.79086 4 4 4 2.2091 0 4-1.7909 4-4 0-2.20914-1.7909-4-4-4Zm-1.12 13.94L15.46 14M3.95 6.06 8.54 14M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z"
      />
    </svg>
  );
};

export default BordChromeIcon;
