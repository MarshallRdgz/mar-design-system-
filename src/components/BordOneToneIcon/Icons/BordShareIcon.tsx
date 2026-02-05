import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordShareIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 12v8c0 .5304.21071 1.0391.58579 1.4142C4.96086 21.7893 5.46957 22 6 22h12c.5304 0 1.0391-.2107 1.4142-.5858S20 20.5304 20 20v-8m-4-6-4-4m0 0L8 6m4-4v13"
      />
    </svg>
  );
};

export default BordShareIcon;
