import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCropIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.13 1 6 16c0 .5304.21071 1.0391.58579 1.4142C6.96086 17.7893 7.46957 18 8 18h15M1 6.13 16 6c.5304 0 1.0391.21071 1.4142.58579C17.7893 6.96086 18 7.46957 18 8v15"
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

export default BordCropIcon;
