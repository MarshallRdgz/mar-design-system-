import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCodepenIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12 2 10 6.5M12 2 2 8.5M12 2v6.5m10 0v7m0-7-10 7m10 0L12 22m10-6.5-10-7M12 22 2 15.5M12 22v-6.5m-10 0v-7m0 7 10-7m-10 0 10 7"
      />
    </svg>
  );
};

export default BordCodepenIcon;
