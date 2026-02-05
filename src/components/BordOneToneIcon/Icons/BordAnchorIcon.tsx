import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAnchorIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 22V8m0 14c-2.65216 0-5.1957-1.0536-7.07107-2.9289C3.05357 17.1957 2 14.6522 2 12h3m7 10c2.6522 0 5.1957-1.0536 7.0711-2.9289C20.9464 17.1957 22 14.6522 22 12h-3m-7-4c1.6569 0 3-1.34315 3-3s-1.3431-3-3-3-3 1.34315-3 3 1.3431 3 3 3Z"
      />
    </svg>
  );
};

export default BordAnchorIcon;
