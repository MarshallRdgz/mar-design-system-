import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPlusSquareIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v8m-4-4h8M5 3h14c1.1046 0 2 .89543 2 2v14c0 1.1046-.8954 2-2 2H5c-1.10457 0-2-.8954-2-2V5c0-1.10457.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordPlusSquareIcon;
