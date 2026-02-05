import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBriefcaseIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 21V5c0-.53043-.2107-1.03914-.5858-1.41421C15.0391 3.21071 14.5304 3 14 3h-4c-.53043 0-1.03914.21071-1.41421.58579C8.21071 3.96086 8 4.46957 8 5v16M4 7h16c1.1046 0 2 .89543 2 2v10c0 1.1046-.8954 2-2 2H4c-1.10457 0-2-.8954-2-2V9c0-1.10457.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordBriefcaseIcon;
