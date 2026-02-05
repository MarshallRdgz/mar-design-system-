import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFolderMinusIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 14h6m7 5c0 .5304-.2107 1.0391-.5858 1.4142S20.5304 21 20 21H4c-.53043 0-1.03914-.2107-1.41421-.5858C2.21071 20.0391 2 19.5304 2 19V5c0-.53043.21071-1.03914.58579-1.41421C2.96086 3.21071 3.46957 3 4 3h5l2 3h9c.5304 0 1.0391.21071 1.4142.58579C21.7893 6.96086 22 7.46957 22 8v11Z"
      />
    </svg>
  );
};

export default BordFolderMinusIcon;
