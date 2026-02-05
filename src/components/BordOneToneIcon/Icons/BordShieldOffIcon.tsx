import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordShieldOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.69 14c.2011-.6478.3055-1.3217.31-2V5l-8-3-3.16 1.18M4.73 4.73 4 5v7c0 6 8 10 8 10 2.117-1.1171 4.0197-2.5999 5.62-4.38M1 1l22 22"
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

export default BordShieldOffIcon;
