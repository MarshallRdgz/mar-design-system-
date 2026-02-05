import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPowerIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.3601 6.64c1.2584 1.25879 2.1153 2.86244 2.4623 4.6082.347 1.7457.1686 3.5552-.5126 5.1996-.6813 1.6443-1.8349 3.0498-3.3149 4.0386-1.4799.9888-3.2199 1.5165-4.9998 1.5165-1.7799 0-3.51983-.5277-4.99981-1.5165-1.47997-.9888-2.63353-2.3943-3.3148-4.0386-.68128-1.6444-.85968-3.4539-.51265-5.1996.34703-1.74576 1.2039-3.34941 2.46228-4.6082M12.0001 2v10"
      />
    </svg>
  );
};

export default BordPowerIcon;
