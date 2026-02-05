import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGitCommitIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.0098 12h5.95m-21.91 0h5.95m9 0c0 2.2091-1.7909 4-4 4-2.20913 0-4-1.7909-4-4 0-2.20914 1.79087-4 4-4 2.2091 0 4 1.79086 4 4Z"
      />
    </svg>
  );
};

export default BordGitCommitIcon;
