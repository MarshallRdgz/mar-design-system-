import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTruckIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 16h7v-5l-3-3h-4v8Zm0 0V3H1v13h15Zm5 2.5c0 1.3807-1.1193 2.5-2.5 2.5S16 19.8807 16 18.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Zm-13 0C8 19.8807 6.88071 21 5.5 21S3 19.8807 3 18.5 4.11929 16 5.5 16 8 17.1193 8 18.5Z"
      />
    </svg>
  );
};

export default BordTruckIcon;
