import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBarCode2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.12207 19.7375V4.63745M19.8787 19.7375V4.63745M14.6265 18.4792V5.89579M9.37427 18.4792V5.89579"
      />
    </svg>
  );
};

export default BordBarCode2Icon;
