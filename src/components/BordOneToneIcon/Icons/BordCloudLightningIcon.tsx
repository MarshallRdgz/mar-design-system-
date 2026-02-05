import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCloudLightningIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.9999 16.9001c1.2152-.2468 2.2953-.9362 3.0307-1.9346.7354-.9983 1.0737-2.2343.949-3.4679-.1246-1.2337-.7031-2.37708-1.6233-3.20817-.9202-.83109-2.1164-1.29062-3.3564-1.28937h-1.26c-.3313-1.28269-.9759-2.46301-1.8761-3.43502-.9001-.972-2.0275-1.70525-3.281-2.13392-1.2536-.42867-2.59389-.539333-3.90073-.32206-1.30684.21728-2.53927.75569-3.58663 1.5669-1.04736.81122-1.87688 1.86983-2.41407 3.08081-.53719 1.21097-.765246 2.5364-.66368 3.85728.10156 1.32085.52956 2.59585 1.24557 3.71045.716 1.1146 1.69761 2.034 2.85667 2.6756m7.87997-5-3.99997 6h5.99997l-4 6"
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

export default BordCloudLightningIcon;
