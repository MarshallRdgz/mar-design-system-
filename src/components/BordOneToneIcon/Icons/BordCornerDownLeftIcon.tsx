import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerDownLeftIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 10-5 5m0 0 5 5m-5-5h12c1.0609 0 2.0783-.4214 2.8284-1.1716C19.5786 13.0783 20 12.0609 20 11V4"
      />
    </svg>
  );
};

export default BordCornerDownLeftIcon;
