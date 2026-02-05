import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerLeftUpIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 9 9 4m0 0L4 9m5-5v12c0 1.0609.42143 2.0783 1.1716 2.8284C10.9217 19.5786 11.9391 20 13 20h7"
      />
    </svg>
  );
};

export default BordCornerLeftUpIcon;
