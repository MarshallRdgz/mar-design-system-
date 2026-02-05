import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordHomeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 22V12h6v10M3 9l9-7 9 7v11c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 22 19 22H5c-.53043 0-1.03914-.2107-1.41421-.5858C3.21071 21.0391 3 20.5304 3 20V9Z"
      />
    </svg>
  );
};

export default BordHomeIcon;
