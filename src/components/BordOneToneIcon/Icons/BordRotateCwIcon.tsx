import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordRotateCwIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22.9999 4.00001V10m0 0h-6m6 0-4.63-4.35999c-1.3794-1.38026-3.17-2.27481-5.1021-2.54885-1.932-.27405-3.90075.08727-5.60957 1.02949-1.70881.94223-3.0651 2.41431-3.86449 4.19443-.79938 1.78012-.99855 3.77182-.56749 5.67502.43105 1.9031 1.46899 3.6146 2.95738 4.8766 1.4884 1.2619 3.34663 2.0059 5.29467 2.1199 1.948.114 3.8803-.4083 5.5057-1.4881S19.8399 16.8399 20.4899 15"
      />
    </svg>
  );
};

export default BordRotateCwIcon;
