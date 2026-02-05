import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordNotificationIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.73 21c-.1758.3031-.4282.5547-.7318.7295-.3036.1749-.6478.267-.9982.267-.3504 0-.6946-.0921-.9982-.267-.3036-.1748-.556-.4264-.7318-.7295M18 8c0-1.5913-.6321-3.11742-1.7574-4.24264C15.1174 2.63214 13.5913 2 12 2c-1.5913 0-3.11742.63214-4.24264 1.75736C6.63214 4.88258 6 6.4087 6 8c0 7-3 9-3 9h18s-3-2-3-9Z"
      />
    </svg>
  );
};

export default BordNotificationIcon;
