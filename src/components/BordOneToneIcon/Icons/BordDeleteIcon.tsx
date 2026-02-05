import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordDeleteIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m18 9-6 6m0-6 6 6m3-11H8l-7 8 7 8h13c.5304 0 1.0391-.2107 1.4142-.5858S23 18.5304 23 18V6c0-.53043-.2107-1.03914-.5858-1.41421C22.0391 4.21071 21.5304 4 21 4Z"
      />
    </svg>
  );
};

export default BordDeleteIcon;
