import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGitBranchIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 18c0 1.6569-1.34315 3-3 3s-3-1.3431-3-3 1.34315-3 3-3m3 3c0-1.6569-1.34315-3-3-3m3 3c2.3869 0 4.6761-.9482 6.364-2.636C17.0518 13.6761 18 11.3869 18 9M6 15V3m12 6c1.6569 0 3-1.34315 3-3s-1.3431-3-3-3-3 1.34315-3 3 1.3431 3 3 3Z"
      />
    </svg>
  );
};

export default BordGitBranchIcon;
