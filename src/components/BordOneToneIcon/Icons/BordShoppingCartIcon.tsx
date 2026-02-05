import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordShoppingCartIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 1h4l2.68 13.39c.09144.4604.34191.874.70755 1.1683.36563.2943.82315.4507 1.29245.4417h9.72c.4693.009.9268-.1474 1.2925-.4417.3656-.2943.6161-.7079.7075-1.1683L23 6H6m15 15c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Zm-11 0c0 .5523-.44772 1-1 1s-1-.4477-1-1 .44772-1 1-1 1 .4477 1 1Z"
      />
    </svg>
  );
};

export default BordShoppingCartIcon;
