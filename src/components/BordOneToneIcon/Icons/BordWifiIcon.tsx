import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordWifiIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.9999 20h.01m-3.47998-3.89c1.0152-.7212 2.22968-1.1087 3.47498-1.1087 1.2453 0 2.4598.3875 3.475 1.1087M4.99992 12.55c1.97657-1.6463 4.46761-2.5478 7.03998-2.5478 2.5724 0 5.0635.9015 7.04 2.5478M1.41992 9.00004C4.34234 6.424 8.10422 5.00269 11.9999 5.00269c3.8957 0 7.6576 1.42131 10.58 3.99735"
      />
    </svg>
  );
};

export default BordWifiIcon;
