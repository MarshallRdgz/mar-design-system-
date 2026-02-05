import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordInstagramIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.5 6.5h.01M7 2h10c2.7614 0 5 2.23858 5 5v10c0 2.7614-2.2386 5-5 5H7c-2.76142 0-5-2.2386-5-5V7c0-2.76142 2.23858-5 5-5Zm9 9.37c.1234.8322-.0187 1.6822-.4062 2.429-.3875.7468-1.0007 1.3524-1.7522 1.7307-.7515.3782-1.6032.5099-2.4338.3762-.8307-.1336-1.59804-.5258-2.19296-1.1207-.59492-.595-.98711-1.3623-1.12077-2.193-.13367-.8306-.002-1.6823.37626-2.4338.37826-.75155.98386-1.36466 1.73067-1.75216.7468-.3875 1.5968-.52965 2.429-.40624.8489.12588 1.6349.52146 2.2417 1.12831.6068.60684 1.0024 1.39279 1.1283 2.24169Z"
      />
    </svg>
  );
};

export default BordInstagramIcon;
