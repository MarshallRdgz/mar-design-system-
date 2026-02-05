import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLifeBuoyIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14.83 14.83 4.24 4.24m-14.14 0 4.24-4.24m9.9-9.9-4.24 4.24 3.53-3.53M4.93 4.93l4.24 4.24M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Zm-6 0c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z"
      />
    </svg>
  );
};

export default BordLifeBuoyIcon;
