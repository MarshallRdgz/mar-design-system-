import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerDownRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 10 5 5m0 0-5 5m5-5H8c-1.06087 0-2.07828-.4214-2.82843-1.1716C4.42143 13.0783 4 12.0609 4 11V4"
      />
    </svg>
  );
};

export default BordCornerDownRightIcon;
