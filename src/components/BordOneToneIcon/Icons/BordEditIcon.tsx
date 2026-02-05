import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordEditIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 3.99998H4c-.53043 0-1.03914.21072-1.41421.58579C2.21071 4.96084 2 5.46955 2 5.99998V20c0 .5304.21071 1.0391.58579 1.4142C2.96086 21.7893 3.46957 22 4 22h14c.5304 0 1.0391-.2107 1.4142-.5858S20 20.5304 20 20v-7M18.5 2.49998c.3978-.39782.9374-.62132 1.5-.62132s1.1022.2235 1.5.62132c.3978.39783.6213.93739.6213 1.5s-.2235 1.10218-.6213 1.5L12 15l-4 1 1-4 9.5-9.50002Z"
      />
    </svg>
  );
};

export default BordEditIcon;
