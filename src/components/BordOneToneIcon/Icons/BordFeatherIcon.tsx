import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFeatherIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 8.00004 2 22m15.5-7H9m11.24-2.76c1.1258-1.1258 1.7583-2.65278 1.7583-4.24496 0-1.59219-.6325-3.11916-1.7583-4.245-1.1258-1.12585-2.6528-1.75834-4.245-1.75834s-3.1192.63249-4.245 1.75834L5 10.5V19h8.5l6.74-6.76Z"
      />
    </svg>
  );
};

export default BordFeatherIcon;
