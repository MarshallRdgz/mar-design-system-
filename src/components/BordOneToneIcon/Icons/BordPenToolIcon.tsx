import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPenToolIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m2 2 14.5 3.5L18 13l-5 5-7.5-1.5L2 2Zm0 0 7.586 7.586M12 19l7-7 3 3-7 7-3-3Zm1-8c0 1.1046-.8954 2-2 2-1.10457 0-2-.8954-2-2 0-1.10457.89543-2 2-2 1.1046 0 2 .89543 2 2Z"
      />
    </svg>
  );
};

export default BordPenToolIcon;
