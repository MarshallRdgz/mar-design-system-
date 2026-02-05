import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordDollarSignIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 1v22m5-18H9.5c-.92826 0-1.8185.36875-2.47487 1.02513C6.36875 6.6815 6 7.57174 6 8.5c0 .92826.36875 1.8185 1.02513 2.4749C7.6815 11.6313 8.57174 12 9.5 12h5c.9283 0 1.8185.3687 2.4749 1.0251C17.6313 13.6815 18 14.5717 18 15.5c0 .9283-.3687 1.8185-1.0251 2.4749C16.3185 18.6313 15.4283 19 14.5 19H6"
      />
    </svg>
  );
};

export default BordDollarSignIcon;
