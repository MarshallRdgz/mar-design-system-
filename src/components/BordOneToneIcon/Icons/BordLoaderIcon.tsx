import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLoaderIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 18v4m4.24-5.76 2.83 2.83m-14.14 0 2.83-2.83M18 12h4M2 12h4m10.24-4.24 2.83-2.83m-14.14 0 2.83 2.83M12 2v4"
      />
    </svg>
  );
};

export default BordLoaderIcon;
