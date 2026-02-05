import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordScissorsIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 4 8.12 15.88m6.35-1.4L20 20M8.12 8.12 12 12m-3 6c0 1.6569-1.34315 3-3 3s-3-1.3431-3-3 1.34315-3 3-3 3 1.3431 3 3ZM9 6c0 1.65685-1.34315 3-3 3S3 7.65685 3 6s1.34315-3 3-3 3 1.34315 3 3Z"
      />
    </svg>
  );
};

export default BordScissorsIcon;
