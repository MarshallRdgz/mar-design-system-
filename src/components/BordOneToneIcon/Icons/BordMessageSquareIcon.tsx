import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMessageSquareIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 15c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 17 19 17H7l-4 4V5c0-.53043.21071-1.03914.58579-1.41421C3.96086 3.21071 4.46957 3 5 3h14c.5304 0 1.0391.21071 1.4142.58579C20.7893 3.96086 21 4.46957 21 5v10Z"
      />
    </svg>
  );
};

export default BordMessageSquareIcon;
