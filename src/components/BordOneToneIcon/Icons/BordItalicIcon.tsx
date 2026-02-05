import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordItalicIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 20H5M19 4h-9m5 0L9 20"
      />
    </svg>
  );
};

export default BordItalicIcon;
