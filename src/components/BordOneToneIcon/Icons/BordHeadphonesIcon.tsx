import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordHeadphonesIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 18v-6c0-2.38695.94821-4.67613 2.63604-6.36396S9.61305 3 12 3c2.3869 0 4.6761.94821 6.364 2.63604C20.0518 7.32387 21 9.61305 21 12v6m0 1c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 21 19 21h-1c-.5304 0-1.0391-.2107-1.4142-.5858S16 19.5304 16 19v-3c0-.5304.2107-1.0391.5858-1.4142S17.4696 14 18 14h3v5ZM3 19c0 .5304.21071 1.0391.58579 1.4142C3.96086 20.7893 4.46957 21 5 21h1c.53043 0 1.03914-.2107 1.41421-.5858C7.78929 20.0391 8 19.5304 8 19v-3c0-.5304-.21071-1.0391-.58579-1.4142C7.03914 14.2107 6.53043 14 6 14H3v5Z"
      />
    </svg>
  );
};

export default BordHeadphonesIcon;
