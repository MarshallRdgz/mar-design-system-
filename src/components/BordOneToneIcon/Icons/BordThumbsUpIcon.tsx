import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordThumbsUpIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 11 4-9c.7956 0 1.5587.31607 2.1213.87868C13.6839 3.44129 14 4.20435 14 5v4h5.66c.2899-.00328.5771.0565.8416.17522.2645.11871.5.29351.6903.51229.1902.21878.3306.47629.4114.75479.0809.2784.1002.5711.0567.8577l-1.38 9c-.0723.4769-.3146.9116-.6821 1.224-.3675.3124-.8356.4815-1.3179.476H7m0-11v11m0-11H4c-.53043 0-1.03914.2107-1.41421.5858C2.21071 11.9609 2 12.4696 2 13v7c0 .5304.21071 1.0391.58579 1.4142C2.96086 21.7893 3.46957 22 4 22h3"
      />
    </svg>
  );
};

export default BordThumbsUpIcon;
