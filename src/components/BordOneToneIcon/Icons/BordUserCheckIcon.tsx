import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUserCheckIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 21v-2c0-1.0609-.4214-2.0783-1.1716-2.8284C14.0783 15.4214 13.0609 15 12 15H5c-1.06087 0-2.07828.4214-2.82843 1.1716C1.42143 16.9217 1 17.9391 1 19v2m16-10 2 2 4-4M12.5 7c0 2.20914-1.7909 4-4 4-2.20914 0-4-1.79086-4-4s1.79086-4 4-4c2.2091 0 4 1.79086 4 4Z"
      />
    </svg>
  );
};

export default BordUserCheckIcon;
