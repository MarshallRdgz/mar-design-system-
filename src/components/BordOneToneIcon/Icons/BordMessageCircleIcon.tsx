import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMessageCircleIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 11.5c.0034 1.3199-.3049 2.6219-.9 3.8-.7056 1.4118-1.7902 2.5992-3.1326 3.4293-1.3423.8301-2.8892 1.2701-4.4674 1.2707-1.3199.0035-2.62188-.3049-3.8-.9L3 21l1.9-5.7c-.59507-1.1781-.90344-2.4801-.9-3.8.00061-1.57821.44061-3.12512 1.27072-4.46742C6.10083 5.69028 7.28825 4.6056 8.7 3.90003c1.17812-.59507 2.4801-.90344 3.8-.9h.5c2.0843.11499 4.053.99476 5.5291 2.47086C20.0052 6.94699 20.885 8.91568 21 11v.5Z"
      />
    </svg>
  );
};

export default BordMessageCircleIcon;
