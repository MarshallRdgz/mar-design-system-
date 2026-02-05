import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerRightDownIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m10 15 5 5m0 0 5-5m-5 5V8c0-1.06087-.4214-2.07828-1.1716-2.82843C13.0783 4.42143 12.0609 4 11 4H4"
      />
    </svg>
  );
};

export default BordCornerRightDownIcon;
