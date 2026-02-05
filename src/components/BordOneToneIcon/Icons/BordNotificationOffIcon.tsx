import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordNotificationOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.73 21c-.1758.3031-.4282.5547-.7318.7295-.3036.1749-.6478.267-.9982.267-.3504 0-.6946-.0921-.9982-.267-.3036-.1748-.556-.4264-.7318-.7295m8.36-8c-.4449-1.6286-.657-3.31196-.63-5 .0016-1.08694-.2921-2.15389-.8497-3.08691-.5576-.93301-1.3581-1.69703-2.3162-2.21045-.958-.51342-2.0375-.75695-3.1232-.70457C10.6252 2.05044 9.57417 2.39675 8.67 3M6.26 6.26C6.08627 6.82361 5.99861 7.41022 6 8c0 7-3 9-3 9h14M1 1l22 22"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BordNotificationOffIcon;
