import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordVolume2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.07 4.92993c1.8747 1.87528 2.9279 4.41836 2.9279 7.06997 0 2.6517-1.0532 5.1948-2.9279 7.07M15.54 8.45993c.9374.93764 1.4639 2.20917 1.4639 3.53497 0 1.3259-.5265 2.5974-1.4639 3.535M11 4.99993l-5 4H2v5.99997h4l5 4V4.99993Z"
      />
    </svg>
  );
};

export default BordVolume2Icon;
