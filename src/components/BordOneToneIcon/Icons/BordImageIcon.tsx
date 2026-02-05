import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordImageIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 21h14c1.1046 0 2-.8954 2-2V5c0-1.10457-.8954-2-2-2H5c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2Zm0 0 11-11 5 5M10 8.5c0 .82843-.67157 1.5-1.5 1.5S7 9.32843 7 8.5 7.67157 7 8.5 7s1.5.67157 1.5 1.5Z"
      />
    </svg>
  );
};

export default BordImageIcon;
