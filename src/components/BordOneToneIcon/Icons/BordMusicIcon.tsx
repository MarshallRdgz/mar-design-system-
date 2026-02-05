import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMusicIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 18c0 1.6569-1.34315 3-3 3s-3-1.3431-3-3 1.34315-3 3-3 3 1.3431 3 3Zm0 0V5l12-2v13m0 0c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      />
    </svg>
  );
};

export default BordMusicIcon;
