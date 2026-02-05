import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordZapOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.57 12.91 21 10h-5.34M8 8l-5 6h9l-1 8 5-6m-3.59-9.25L13 2l-2.43 2.92M1 1l22 22"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BordZapOffIcon;
