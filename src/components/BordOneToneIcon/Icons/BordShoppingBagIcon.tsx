import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordShoppingBagIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3 6 3-4h12l3 4M3 6v14c0 .5304.21071 1.0391.58579 1.4142C3.96086 21.7893 4.46957 22 5 22h14c.5304 0 1.0391-.2107 1.4142-.5858S21 20.5304 21 20V6M3 6h18m-5 4c0 1.0609-.4214 2.0783-1.1716 2.8284C14.0783 13.5786 13.0609 14 12 14c-1.0609 0-2.07828-.4214-2.82843-1.1716C8.42143 12.0783 8 11.0609 8 10"
      />
    </svg>
  );
};

export default BordShoppingBagIcon;
