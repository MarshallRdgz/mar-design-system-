import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPieChartIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.2104 15.89c-.6362 1.5045-1.6312 2.8302-2.8981 3.8613s-2.7671 1.7361-4.3695 2.0535c-1.6023.3173-3.258.2373-4.82225-.233-1.56428-.4704-2.98952-1.3167-4.15113-2.4651-1.1616-1.1485-2.0242-2.5639-2.51238-4.1228-.48818-1.5588-.58708-3.2134-.28804-4.8193.29904-1.60582.9869-3.11397 2.00345-4.39257S6.50329 3.48332 8.0004 2.83m14 9.17c0-1.3132-.2587-2.61358-.7612-3.82683-.5025-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773C14.614 2.25866 13.3136 2 12.0004 2v10h10Z"
      />
    </svg>
  );
};

export default BordPieChartIcon;
