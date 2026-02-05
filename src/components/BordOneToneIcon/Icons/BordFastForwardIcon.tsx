import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFastForwardIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13 19 9-7-9-7v14ZM2 19l9-7-9-7v14Z"
      />
    </svg>
  );
};

export default BordFastForwardIcon;
