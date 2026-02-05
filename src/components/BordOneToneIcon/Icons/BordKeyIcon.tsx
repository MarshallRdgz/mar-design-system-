import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordKeyIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m21.0003 2-2 2m0 0 3 3-3.5 3.5-3-3m3.5-3.5-3.5 3.5m-4.11 4.11c.5163.5095.9268 1.116 1.2077 1.7848.281.6687.4269 1.3865.4293 2.1118.0024.7254-.1386 1.4441-.4151 2.1147-.2765.6706-.6829 1.2799-1.1958 1.7928-.5129.513-1.1222.9193-1.79282 1.1958-.67062.2765-1.38931.4176-2.11467.4151-.72537-.0024-1.44309-.1483-2.11184-.4292-.66876-.281-1.27533-.6915-1.7848-1.2078-1.00187-1.0373-1.55623-2.4266-1.5437-3.8687.01253-1.4421.59096-2.8216 1.6107-3.8413 1.01975-1.0197 2.39922-1.5982 3.8413-1.6107 1.44208-.0125 2.83143.5418 3.86873 1.5437l.001-.001Zm0 0 4.11-4.11"
      />
    </svg>
  );
};

export default BordKeyIcon;
