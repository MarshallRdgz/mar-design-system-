import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordRefreshCcwIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23 20.0001v-6m0 0h-6m6 0-4.64 4.36c-1.0747 1.0753-2.4044 1.8608-3.8648 2.2832-1.4604.4224-3.0041.468-4.4869.1325-1.48283-.3355-2.8565-1.0412-3.99283-2.0511-1.13634-1.01-1.9983-2.2914-2.50547-3.7246M1 4.00008v6.00002m0 0h6m-6 0 4.64-4.36002c1.07475-1.07529 2.40437-1.8608 3.86481-2.28323 1.46039-.42243 3.00409-.46802 4.48689-.13252 1.4828.33551 2.8565 1.04118 3.9928 2.05116 1.1364 1.00999 1.9983 2.29137 2.5055 3.72459"
      />
    </svg>
  );
};

export default BordRefreshCcwIcon;
