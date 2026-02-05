import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerRightUpIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m10 9 5-5m0 0 5 5m-5-5v12c0 1.0609-.4214 2.0783-1.1716 2.8284C13.0783 19.5786 12.0609 20 11 20H4"
      />
    </svg>
  );
};

export default BordCornerRightUpIcon;
