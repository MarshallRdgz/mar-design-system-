import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAirplayIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 17H4c-.53043 0-1.03914-.2107-1.41421-.5858C2.21071 16.0391 2 15.5304 2 15V5c0-.53043.21071-1.03914.58579-1.41421C2.96086 3.21071 3.46957 3 4 3h16c.5304 0 1.0391.21071 1.4142.58579C21.7893 3.96086 22 4.46957 22 5v10c0 .5304-.2107 1.0391-.5858 1.4142S20.5304 17 20 17h-1m-7-2 5 6H7l5-6Z"
      />
    </svg>
  );
};

export default BordAirplayIcon;
