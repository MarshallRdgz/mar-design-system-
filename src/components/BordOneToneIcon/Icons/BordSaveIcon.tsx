import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordSaveIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 21v-8H7v8M7 3v5h8m4 13H5c-.53043 0-1.03914-.2107-1.41421-.5858C3.21071 20.0391 3 19.5304 3 19V5c0-.53043.21071-1.03914.58579-1.41421C3.96086 3.21071 4.46957 3 5 3h11l5 5v11c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 21 19 21Z"
      />
    </svg>
  );
};

export default BordSaveIcon;
