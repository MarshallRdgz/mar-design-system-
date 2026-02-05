import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordRssIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 11c2.38695 0 4.67613.9482 6.364 2.636C12.0518 15.3239 13 17.6131 13 20M4 4c4.24346 0 8.3131 1.68571 11.3137 4.68629C18.3143 11.6869 20 15.7565 20 20M6 19c0 .5523-.44772 1-1 1s-1-.4477-1-1 .44772-1 1-1 1 .4477 1 1Z"
      />
    </svg>
  );
};

export default BordRssIcon;
