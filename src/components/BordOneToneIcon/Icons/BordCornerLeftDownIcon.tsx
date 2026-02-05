import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCornerLeftDownIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14 15-5 5m0 0-5-5m5 5V8c0-1.06087.42143-2.07828 1.1716-2.82843C10.9217 4.42143 11.9391 4 13 4h7"
      />
    </svg>
  );
};

export default BordCornerLeftDownIcon;
