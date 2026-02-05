import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTrash2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 6h2m0 0h16M5 6v14c0 .5304.21071 1.0391.58579 1.4142C5.96086 21.7893 6.46957 22 7 22h10c.5304 0 1.0391-.2107 1.4142-.5858S19 20.5304 19 20V6H5Zm3 0V4c0-.53043.21071-1.03914.58579-1.41421C8.96086 2.21071 9.46957 2 10 2h4c.5304 0 1.0391.21071 1.4142.58579C15.7893 2.96086 16 3.46957 16 4v2m-2 5v6m-4-6v6"
      />
    </svg>
  );
};

export default BordTrash2Icon;
