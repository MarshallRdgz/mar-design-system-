import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordArchiveIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 8v13H3V8m7 4h4M1 3h22v5H1V3Z"
      />
    </svg>
  );
};

export default BordArchiveIcon;
