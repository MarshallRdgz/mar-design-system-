import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCloudOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M22.61 16.95c.3222-.7607.4509-1.5894.3745-2.4119-.0763-.8226-.3552-1.6135-.8119-2.3019-.4566-.6884-1.0767-1.253-1.8049-1.6432-.7281-.3903-1.5416-.59398-2.3677-.593h-1.26c-.4082-1.60751-1.3059-3.04842-2.569-4.12334C12.908 4.80173 11.3421 4.14593 9.68999 4m-4.69 1c-1.56192.86364-2.79019 2.22478-3.48941 3.86691C.811359 10.509.681344 12.3378 1.14122 14.0623c.45987 1.7246 1.48322 3.2458 2.90725 4.3217C5.47251 19.4599 7.21543 20.0288 8.99999 20H18c.5798-.0007 1.155-.1022 1.7-.3M.999991 1 23 23"
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

export default BordCloudOffIcon;
