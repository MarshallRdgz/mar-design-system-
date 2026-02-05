import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordDatabaseIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3m18-7c0 1.65685-4.0294 3-9 3-4.97056 0-9-1.34315-9-3m18 0c0-1.65685-4.0294-3-9-3-4.97056 0-9 1.34315-9 3m18 0v14c0 1.66-4 3-9 3s-9-1.34-9-3V5"
      />
    </svg>
  );
};

export default BordDatabaseIcon;
