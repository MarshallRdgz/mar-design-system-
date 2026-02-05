import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBookmarkIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 21-7-5-7 5V5c0-.53043.21071-1.03914.58579-1.41421C5.96086 3.21071 6.46957 3 7 3h10c.5304 0 1.0391.21071 1.4142.58579C18.7893 3.96086 19 4.46957 19 5v16Z"
      />
    </svg>
  );
};

export default BordBookmarkIcon;
