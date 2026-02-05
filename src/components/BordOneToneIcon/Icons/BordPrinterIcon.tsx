import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPrinterIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 18H4c-.53043 0-1.03914-.2107-1.41421-.5858C2.21071 17.0391 2 16.5304 2 16v-5c0-.5304.21071-1.03914.58579-1.41421C2.96086 9.21071 3.46957 9 4 9h16c.5304 0 1.0391.21071 1.4142.58579C21.7893 9.96086 22 10.4696 22 11v5c0 .5304-.2107 1.0391-.5858 1.4142S20.5304 18 20 18h-2M6 9V2h12v7M6 14h12v8H6v-8Z"
      />
    </svg>
  );
};

export default BordPrinterIcon;
