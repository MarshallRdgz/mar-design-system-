import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCopyIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 15H4c-.53043 0-1.03914-.2107-1.41421-.5858C2.21071 14.0391 2 13.5304 2 13V4c0-.53043.21071-1.03914.58579-1.41421C2.96086 2.21071 3.46957 2 4 2h9c.5304 0 1.0391.21071 1.4142.58579C14.7893 2.96086 15 3.46957 15 4v1m-4 4h9c1.1046 0 2 .89543 2 2v9c0 1.1046-.8954 2-2 2h-9c-1.10457 0-2-.8954-2-2v-9c0-1.10457.89543-2 2-2Z"
      />
    </svg>
  );
};

export default BordCopyIcon;
