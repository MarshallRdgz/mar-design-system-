import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCloudIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.0001 10h-1.26c-.3741-1.449-1.1472-2.76401-2.2313-3.7956-1.0842-1.0316-2.436-1.73841-3.9018-2.04012-1.46576-.30172-2.9868-.18624-4.39024.33331-1.40344.51955-2.63301 1.42234-3.549 2.60579-.91599 1.18345-1.48166 2.6001-1.63274 4.08902-.151085 1.4888.11848 2.9902.77807 4.3336.65958 1.3433 1.68274 2.4747 2.9532 3.2656 1.27047.7908 2.7373 1.2095 4.23382 1.2084h8.99999c1.3261 0 2.5979-.5268 3.5355-1.4645.9377-.9376 1.4645-2.2094 1.4645-3.5355 0-1.3261-.5268-2.5979-1.4645-3.5355C20.598 10.5268 19.3262 10 18.0001 10Z"
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

export default BordCloudIcon;
