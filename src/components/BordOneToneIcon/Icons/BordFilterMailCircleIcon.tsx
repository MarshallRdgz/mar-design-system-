import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFilterMailCircleIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 12.5001 7.9999-.0001M10 16h4M7 9h10m5 3c0-5.52285-4.4772-10-10-10C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10Z"
      />
    </svg>
  );
};

export default BordFilterMailCircleIcon;
