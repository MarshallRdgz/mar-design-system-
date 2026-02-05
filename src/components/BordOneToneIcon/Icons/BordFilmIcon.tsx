import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordFilmIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5m10 0h5M17 7h5M4.18 2h15.64C21.024 2 22 2.97602 22 4.18v15.64c0 1.204-.976 2.18-2.18 2.18H4.18C2.97602 22 2 21.024 2 19.82V4.18C2 2.97602 2.97602 2 4.18 2Z"
      />
    </svg>
  );
};

export default BordFilmIcon;
