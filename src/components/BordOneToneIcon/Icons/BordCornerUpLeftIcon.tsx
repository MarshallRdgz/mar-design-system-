import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerUpLeftIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 14 4 9m0 0 5-5M4 9h12c1.0609 0 2.0783.42143 2.8284 1.1716C19.5786 10.9217 20 11.9391 20 13v7"
      />
    </svg>
  );
};

export default BordCornerUpLeftIcon;
