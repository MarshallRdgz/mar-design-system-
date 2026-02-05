import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordEdit2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 3.00006c.2626-.26265.5744-.47099.9176-.61313.3432-.14214.711-.2153 1.0824-.2153.3714 0 .7392.07316 1.0824.2153.3432.14214.655.35048.9176.61313.2626.26264.471.57445.6131.91761.1422.34316.2153.71095.2153 1.08239 0 .37143-.0731.73923-.2153 1.08239-.1421.34316-.3505.65496-.6131.91761L7.5 20.5001l-5.5 1.5 1.5-5.5L17 3.00006Z"
      />
    </svg>
  );
};

export default BordEdit2Icon;
