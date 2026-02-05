import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTabletIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 18h.01M6 2h12c1.1046 0 2 .89543 2 2v16c0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2V4c0-1.10457.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordTabletIcon;
