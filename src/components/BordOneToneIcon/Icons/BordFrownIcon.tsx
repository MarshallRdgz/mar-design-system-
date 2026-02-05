import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFrownIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 16s-1.5-2-4-2-4 2-4 2m7-7h.01M9 9h.01M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z"
      />
    </svg>
  );
};

export default BordFrownIcon;
