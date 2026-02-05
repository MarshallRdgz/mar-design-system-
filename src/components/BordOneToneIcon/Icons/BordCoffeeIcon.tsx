import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCoffeeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 8h1c1.0609 0 2.0783.42143 2.8284 1.17157C22.5786 9.92172 23 10.9391 23 12s-.4214 2.0783-1.1716 2.8284C21.0783 15.5786 20.0609 16 19 16h-1m0-8H2v9c0 1.0609.42143 2.0783 1.17157 2.8284C3.92172 20.5786 4.93913 21 6 21h8c1.0609 0 2.0783-.4214 2.8284-1.1716C17.5786 19.0783 18 18.0609 18 17V8Zm-4-7v3m-4-3v3M6 1v3"
      />
    </svg>
  );
};

export default BordCoffeeIcon;
