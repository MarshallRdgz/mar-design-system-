import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordVoicemailIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.5 16h13m-13 0c2.48528 0 4.5-2.0147 4.5-4.5C10 9.01472 7.98528 7 5.5 7S1 9.01472 1 11.5C1 13.9853 3.01472 16 5.5 16Zm13 0c2.4853 0 4.5-2.0147 4.5-4.5C23 9.01472 20.9853 7 18.5 7S14 9.01472 14 11.5c0 2.4853 2.0147 4.5 4.5 4.5Z"
      />
    </svg>
  );
};

export default BordVoicemailIcon;
