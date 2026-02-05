import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUnderlineIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 21h16M6 3v7c0 1.5913.63214 3.1174 1.75736 4.2426C8.88258 15.3679 10.4087 16 12 16s3.1174-.6321 4.2426-1.7574C17.3679 13.1174 18 11.5913 18 10V3"
      />
    </svg>
  );
};

export default BordUnderlineIcon;
