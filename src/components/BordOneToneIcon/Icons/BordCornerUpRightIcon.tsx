import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerUpRightIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m15 14 5-5m0 0-5-5m5 5H8c-1.06087 0-2.07828.42143-2.82843 1.1716C4.42143 10.9217 4 11.9391 4 13v7"
      />
    </svg>
  );
};

export default BordCornerUpRightIcon;
