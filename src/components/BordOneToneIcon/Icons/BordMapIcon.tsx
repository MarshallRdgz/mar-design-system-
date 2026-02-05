import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMapIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8 18-7 4V6l7-4m0 16 8 4m-8-4V2m8 20 7-4V2l-7 4m0 16V6m0 0L8 2"
      />
    </svg>
  );
};

export default BordMapIcon;
