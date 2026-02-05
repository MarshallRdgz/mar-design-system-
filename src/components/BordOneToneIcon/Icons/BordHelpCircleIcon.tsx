import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordHelpCircleIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 17h.01M9.09 9c.2351-.66833.69915-1.23189 1.31-1.59087.6108-.35897 1.3289-.49019 2.0272-.37042.6983.11978 1.3316.48281 1.7879 1.02482.4562.542.706 1.22799.7049 1.93647 0 2-3 3-3 3M22 12c0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z"
      />
    </svg>
  );
};

export default BordHelpCircleIcon;
