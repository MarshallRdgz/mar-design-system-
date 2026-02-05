import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBoldIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 12h9c1.0609 0 2.0783.4214 2.8284 1.1716C18.5786 13.9217 19 14.9391 19 16c0 1.0609-.4214 2.0783-1.1716 2.8284C17.0783 19.5786 16.0609 20 15 20H6v-8Zm0 0h8c1.0609 0 2.0783-.4214 2.8284-1.1716C17.5786 10.0783 18 9.06087 18 8c0-1.06087-.4214-2.07828-1.1716-2.82843C16.0783 4.42143 15.0609 4 14 4H6v8Z"
      />
    </svg>
  );
};

export default BordBoldIcon;
