import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordTagIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 7h.01m13.58 6.41-7.17 7.17c-.1857.186-.4063.3335-.6491.4341-.2428.1007-.5031.1525-.7659.1525-.2628 0-.5231-.0518-.7659-.1525-.2428-.1006-.4634-.2481-.6491-.4341L2 12V2h10l8.59 8.59c.3725.3747.5816.8816.5816 1.41 0 .5284-.2091 1.0353-.5816 1.41Z"
      />
    </svg>
  );
};

export default BordTagIcon;
