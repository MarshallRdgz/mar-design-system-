import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordServerIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18h.01M6 6h.01M4 14h16c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2H4c-1.10457 0-2-.8954-2-2v-4c0-1.1046.89543-2 2-2ZM4 2h16c1.1046 0 2 .89543 2 2v4c0 1.10457-.8954 2-2 2H4c-1.10457 0-2-.89543-2-2V4c0-1.10457.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordServerIcon;
