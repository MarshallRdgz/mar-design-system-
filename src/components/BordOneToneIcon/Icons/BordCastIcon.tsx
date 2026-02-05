import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCastIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 20h.01M2 16.1c.96089.196 1.84294.6702 2.53638 1.3636C5.22982 18.1571 5.70403 19.0391 5.9 20M2 12.05c2.03079.2259 3.92428 1.136 5.36911 2.5809C8.81395 16.0757 9.72414 17.9692 9.95 20M2 8V6c0-.53043.21071-1.03914.58579-1.41421C2.96086 4.21071 3.46957 4 4 4h16c.5304 0 1.0391.21071 1.4142.58579C21.7893 4.96086 22 5.46957 22 6v12c0 .5304-.2107 1.0391-.5858 1.4142S20.5304 20 20 20h-6"
      />
    </svg>
  );
};

export default BordCastIcon;
