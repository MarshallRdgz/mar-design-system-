import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLayersIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m2 17 10 5 10-5M2 12l10 5 10-5M12 2 2 7l10 5 10-5-10-5Z"
      />
    </svg>
  );
};

export default BordLayersIcon;
