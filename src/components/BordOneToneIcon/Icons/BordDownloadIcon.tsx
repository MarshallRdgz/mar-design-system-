import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordDownloadIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 15v4c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 21 19 21H5c-.53043 0-1.03914-.2107-1.41421-.5858C3.21071 20.0391 3 19.5304 3 19v-4m4-5 5 5m0 0 5-5m-5 5V3"
      />
    </svg>
  );
};

export default BordDownloadIcon;
