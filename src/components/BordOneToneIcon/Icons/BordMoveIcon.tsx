import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMoveIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 19-3 3m0 0-3-3m3 3V2m7 7 3 3m0 0-3 3m3-3H2m3-3-3 3m0 0 3 3M9 5l3-3m0 0 3 3"
      />
    </svg>
  );
};

export default BordMoveIcon;
