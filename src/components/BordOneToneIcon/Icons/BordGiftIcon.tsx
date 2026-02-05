import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGiftIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 12v10H4V12m8 10V7m0 0h4.5c.663 0 1.2989-.26339 1.7678-.73223C18.7366 5.79893 19 5.16304 19 4.5c0-.66304-.2634-1.29893-.7322-1.76777C17.7989 2.26339 17.163 2 16.5 2 13 2 12 7 12 7Zm0 0H7.5c-.66304 0-1.29893-.26339-1.76777-.73223C5.26339 5.79893 5 5.16304 5 4.5c0-.66304.26339-1.29893.73223-1.76777C6.20107 2.26339 6.83696 2 7.5 2 11 2 12 7 12 7ZM2 7h20v5H2V7Z"
      />
    </svg>
  );
};

export default BordGiftIcon;
