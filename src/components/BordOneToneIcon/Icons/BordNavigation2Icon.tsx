import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordNavigation2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12 2 7 19-7-4-7 4 7-19Z"
      />
    </svg>
  );
};

export default BordNavigation2Icon;
