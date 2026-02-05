import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPercentIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 5 5 19m15-1.5c0 1.3807-1.1193 2.5-2.5 2.5S15 18.8807 15 17.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5ZM9 6.5C9 7.88071 7.88071 9 6.5 9S4 7.88071 4 6.5 5.11929 4 6.5 4 9 5.11929 9 6.5Z"
      />
    </svg>
  );
};

export default BordPercentIcon;
