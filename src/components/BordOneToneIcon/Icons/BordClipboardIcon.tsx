import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordClipboardIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 4h2c.5304 0 1.0391.21071 1.4142.58579C19.7893 4.96086 20 5.46957 20 6v14c0 .5304-.2107 1.0391-.5858 1.4142S18.5304 22 18 22H6c-.53043 0-1.03914-.2107-1.41421-.5858C4.21071 21.0391 4 20.5304 4 20V6c0-.53043.21071-1.03914.58579-1.41421C4.96086 4.21071 5.46957 4 6 4h2m1-2h6c.5523 0 1 .44772 1 1v2c0 .55228-.4477 1-1 1H9c-.55228 0-1-.44772-1-1V3c0-.55228.44772-1 1-1Z"
      />
    </svg>
  );
};

export default BordClipboardIcon;
