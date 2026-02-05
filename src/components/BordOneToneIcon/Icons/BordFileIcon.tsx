import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFileIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13 2H6c-.53043 0-1.03914.21071-1.41421.58579C4.21071 2.96086 4 3.46957 4 4v16c0 .5304.21071 1.0391.58579 1.4142C4.96086 21.7893 5.46957 22 6 22h12c.5304 0 1.0391-.2107 1.4142-.5858S20 20.5304 20 20V9m-7-7 7 7m-7-7v7h7"
      />
    </svg>
  );
};

export default BordFileIcon;
