import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCameraIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M23 19c0 .5304-.2107 1.0391-.5858 1.4142S21.5304 21 21 21H3c-.53043 0-1.03914-.2107-1.41421-.5858C1.21071 20.0391 1 19.5304 1 19V8c0-.53043.21071-1.03914.58579-1.41421C1.96086 6.21071 2.46957 6 3 6h4l2-3h6l2 3h4c.5304 0 1.0391.21071 1.4142.58579C22.7893 6.96086 23 7.46957 23 8v11Z"
      />
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 17c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.20914 0-4 1.7909-4 4 0 2.2091 1.79086 4 4 4Z"
      />
    </svg>
  );
};

export default BordCameraIcon;
