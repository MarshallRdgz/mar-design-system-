import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordVideoIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m23 7-7 5 7 5V7ZM14 5H3c-1.10457 0-2 .89543-2 2v10c0 1.1046.89543 2 2 2h11c1.1046 0 2-.8954 2-2V7c0-1.10457-.8954-2-2-2Z"
      />
    </svg>
  );
};

export default BordVideoIcon;
