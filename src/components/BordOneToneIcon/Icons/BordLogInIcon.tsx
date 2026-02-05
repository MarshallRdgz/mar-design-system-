import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLogInIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m10 17 5-5m0 0-5-5m5 5H3m12-9h4c.5304 0 1.0391.21071 1.4142.58579C20.7893 3.96086 21 4.46957 21 5v14c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 21 19 21h-4"
      />
    </svg>
  );
};

export default BordLogInIcon;
