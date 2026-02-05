import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordSunsetIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23 22H1m20-4h2M1 18h2m14 0c0-1.3261-.5268-2.5979-1.4645-3.5355C14.5979 13.5268 13.3261 13 12 13c-1.3261 0-2.59785.5268-3.53553 1.4645C7.52678 15.4021 7 16.6739 7 18m11.36-6.36 1.42-1.42m-15.56 0 1.42 1.42M12 9V2m0 7 4-4m-4 4L8 5"
      />
    </svg>
  );
};

export default BordSunsetIcon;
