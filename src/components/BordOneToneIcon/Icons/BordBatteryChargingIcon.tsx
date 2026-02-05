import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBatteryChargingIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23 13v-2M5 18H3c-.53043 0-1.03914-.2107-1.41421-.5858C1.21071 17.0391 1 16.5304 1 16V8c0-.53043.21071-1.03914.58579-1.41421C1.96086 6.21071 2.46957 6 3 6h3.19M15 6h2c.5304 0 1.0391.21071 1.4142.58579C18.7893 6.96086 19 7.46957 19 8v8c0 .5304-.2107 1.0391-.5858 1.4142S17.5304 18 17 18h-3.19M11 6l-4 6h6l-4 6"
      />
    </svg>
  );
};

export default BordBatteryChargingIcon;
