import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUserIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 21v-2c0-1.0609-.4214-2.0783-1.1716-2.8284C18.0783 15.4214 17.0609 15 16 15H8c-1.06087 0-2.07828.4214-2.82843 1.1716C4.42143 16.9217 4 17.9391 4 19v2M16 7c0 2.20914-1.7909 4-4 4-2.20914 0-4-1.79086-4-4s1.79086-4 4-4c2.2091 0 4 1.79086 4 4Z"
      />
    </svg>
  );
};

export default BordUserIcon;
