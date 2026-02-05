import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordColumnsIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 3h7c.5304 0 1.0391.21071 1.4142.58579C20.7893 3.96086 21 4.46957 21 5v14c0 .5304-.2107 1.0391-.5858 1.4142S19.5304 21 19 21h-7m0-18v18m0-18H5c-.53043 0-1.03914.21071-1.41421.58579C3.21071 3.96086 3 4.46957 3 5v14c0 .5304.21071 1.0391.58579 1.4142C3.96086 20.7893 4.46957 21 5 21h7"
      />
    </svg>
  );
};

export default BordColumnsIcon;
