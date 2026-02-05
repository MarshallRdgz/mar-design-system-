import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMinimizeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 3v3c0 .53043-.21071 1.03914-.58579 1.41421C7.03914 7.78929 6.53043 8 6 8H3m18 0h-3c-.5304 0-1.0391-.21071-1.4142-.58579C16.2107 7.03914 16 6.53043 16 6V3m0 18v-3c0-.5304.2107-1.0391.5858-1.4142S17.4696 16 18 16h3M3 16h3c.53043 0 1.03914.2107 1.41421.5858C7.78929 16.9609 8 17.4696 8 18v3"
      />
    </svg>
  );
};

export default BordMinimizeIcon;
