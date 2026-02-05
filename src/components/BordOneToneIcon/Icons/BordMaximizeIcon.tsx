import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMaximizeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 3H5c-.53043 0-1.03914.21071-1.41421.58579C3.21071 3.96086 3 4.46957 3 5v3m18 0V5c0-.53043-.2107-1.03914-.5858-1.41421C20.0391 3.21071 19.5304 3 19 3h-3m0 18h3c.5304 0 1.0391-.2107 1.4142-.5858S21 19.5304 21 19v-3M3 16v3c0 .5304.21071 1.0391.58579 1.4142C3.96086 20.7893 4.46957 21 5 21h3"
      />
    </svg>
  );
};

export default BordMaximizeIcon;
