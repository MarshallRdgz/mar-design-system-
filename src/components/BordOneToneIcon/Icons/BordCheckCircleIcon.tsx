import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCheckCircleIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 11.0801v.92c-.0012 2.1564-.6995 4.2547-1.9907 5.9818-1.2911 1.7272-3.106 2.9907-5.1739 3.6021-2.068.6114-4.2781.538-6.30093-.2093-2.02279-.7473-3.74982-2.1285-4.92351-3.9375-1.17369-1.8091-1.73117-3.949-1.58928-6.1008.14188-2.15173.97553-4.19997 2.3766-5.83922 1.40107-1.63925 3.29451-2.78169 5.39791-3.25693 2.10341-.47523 4.30411-.2578 6.27381.61986m5.93 1.14L12 14.0101l-2.99999-3"
      />
    </svg>
  );
};

export default BordCheckCircleIcon;
