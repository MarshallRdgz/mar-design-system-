import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGlobeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 12c0 5.5228-4.4772 10-10 10m10-10c0-5.52285-4.4772-10-10-10m10 10H2m10 10C6.47715 22 2 17.5228 2 12m10 10c2.5013-2.7384 3.9228-6.292 4-10-.0772-3.70797-1.4987-7.26165-4-10m0 20c-2.50128-2.7384-3.92275-6.292-4-10 .07725-3.70797 1.49872-7.26165 4-10M2 12C2 6.47715 6.47715 2 12 2"
      />
    </svg>
  );
};

export default BordGlobeIcon;
