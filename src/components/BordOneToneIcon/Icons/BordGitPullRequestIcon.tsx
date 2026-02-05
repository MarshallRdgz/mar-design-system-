import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGitPullRequestIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 15c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3Zm0 0V8c0-.53043-.2107-1.03914-.5858-1.41421C17.0391 6.21071 16.5304 6 16 6h-3M6 9v12M6 9c1.65685 0 3-1.34315 3-3S7.65685 3 6 3 3 4.34315 3 6s1.34315 3 3 3Z"
      />
    </svg>
  );
};

export default BordGitPullRequestIcon;
