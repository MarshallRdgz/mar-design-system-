import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBluetoothIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11"
      />
    </svg>
  );
};

export default BordBluetoothIcon;
