import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMoonIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.9999 12.79c-.1573 1.7022-.7961 3.3244-1.8418 4.6768-1.0456 1.3524-2.4547 2.379-4.0625 2.9597-1.6078.5808-3.3477.6916-5.0162.3196-1.66848-.372-3.1965-1.2116-4.40527-2.4203-1.20877-1.2088-2.04829-2.7368-2.42032-4.4053-.37203-1.6685-.26119-3.4084.31955-5.0162.58075-1.60779 1.60737-3.01693 2.95975-4.06255C7.8855 3.79614 9.5077 3.15731 11.2099 3c-.9966 1.34827-1.47615 3.00945-1.35147 4.68141.12469 1.67197.84537 3.24369 2.03087 4.42919 1.1855 1.1855 2.7572 1.9062 4.4292 2.0309 1.672.1247 3.3331-.3549 4.6814-1.3515Z"
      />
    </svg>
  );
};

export default BordMoonIcon;
