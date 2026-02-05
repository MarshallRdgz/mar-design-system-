import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordVideoOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.66 5H14c.5304 0 1.0391.21071 1.4142.58579C15.7893 5.96086 16 6.46957 16 7v3.34l1 1L23 7v10M1 1l22 22m-7-7v1c0 .5304-.2107 1.0391-.5858 1.4142S14.5304 19 14 19H3c-.53043 0-1.03914-.2107-1.41421-.5858C1.21071 18.0391 1 17.5304 1 17V7c0-.53043.21071-1.03914.58579-1.41421C1.96086 5.21071 2.46957 5 3 5h2l11 11Z"
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

export default BordVideoOffIcon;
