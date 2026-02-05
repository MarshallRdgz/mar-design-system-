import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPocketIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 10 4 4 4-4M4 3h16c.5304 0 1.0391.21071 1.4142.58579C21.7893 3.96086 22 4.46957 22 5v6c0 2.6522-1.0536 5.1957-2.9289 7.0711C17.1957 19.9464 14.6522 21 12 21c-1.3132 0-2.61358-.2587-3.82683-.7612-1.21326-.5026-2.31565-1.2391-3.24424-2.1677C3.05357 16.1957 2 13.6522 2 11V5c0-.53043.21071-1.03914.58579-1.41421C2.96086 3.21071 3.46957 3 4 3Z"
      />
    </svg>
  );
};

export default BordPocketIcon;
