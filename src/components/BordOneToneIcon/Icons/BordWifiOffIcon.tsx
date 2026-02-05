import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordWifiOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m1 1 22 22m-11-3h.01m-3.48-3.89c1.0152-.7213 2.2297-1.1087 3.475-1.1087 1.2453 0 2.4598.3874 3.475 1.1087m1.24-5.05c.8191.3998 1.585.9003 2.28 1.49m-14 0c1.48208-1.2392 3.26587-2.0638 5.17-2.39M1.42 9c1.38717-1.22615 2.9777-2.20077 4.7-2.88m4.59-1.07c2.1424-.17263 4.2976.08816 6.337.76682C19.0865 6.49548 20.9682 7.57808 22.58 9"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BordWifiOffIcon;
