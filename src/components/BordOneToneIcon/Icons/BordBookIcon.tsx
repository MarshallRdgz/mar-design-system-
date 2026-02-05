import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBookIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 19.5c0-.663.26339-1.2989.73223-1.7678C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5c0 .663.26339 1.2989.73223 1.7678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5c-.66304 0-1.29893.26339-1.76777.73223C4.26339 3.20107 4 3.83696 4 4.5v15Z"
      />
    </svg>
  );
};

export default BordBookIcon;
