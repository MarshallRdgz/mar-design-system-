import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordDropletIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m11.9999 2.68994 5.66 5.66c1.1193 1.11861 1.8818 2.54406 2.1909 4.09606.3091 1.552.151 3.1608-.4544 4.6229-.6053 1.4621-1.6307 2.7119-2.9464 3.5911-1.3157.8793-2.8626 1.3486-4.4451 1.3486s-3.12941-.4693-4.44512-1.3486c-1.31571-.8792-2.34108-2.129-2.94643-3.5911s-.76347-3.0709-.45436-4.6229c.3091-1.552 1.07155-2.97745 2.1909-4.09606l5.65001-5.66Z"
      />
    </svg>
  );
};

export default BordDropletIcon;
