import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCpuIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 1v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3M6 4h12c1.1046 0 2 .89543 2 2v12c0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2V6c0-1.10457.89543-2 2-2Zm3 5h6v6H9V9Z"
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

export default BordCpuIcon;
