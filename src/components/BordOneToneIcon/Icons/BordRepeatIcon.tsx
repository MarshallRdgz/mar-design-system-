import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordRepeatIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7 23-4-4m0 0 4-4m-4 4h14c1.0609 0 2.0783-.4214 2.8284-1.1716C20.5786 17.0783 21 16.0609 21 15v-2M17 1l4 4m0 0-4 4m4-4H7c-1.06087 0-2.07828.42143-2.82843 1.17157C3.42143 6.92172 3 7.93913 3 9v2"
      />
    </svg>
  );
};

export default BordRepeatIcon;
