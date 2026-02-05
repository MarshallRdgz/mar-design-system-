import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMicOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 23.0001h8M1 1.00009 23 23.0001M15 9.34009v-5.34c.0007-.74397-.275-1.46168-.7736-2.0138-.4987-.55212-1.1847-.89926-1.9249-.97402-.7402-.074773-1.4818.12816-2.0808.56941C9.62172 2.02293 9.20805 2.671 9.06 3.40009M17 16.9501c-.9762.9964-2.2279 1.6784-3.5944 1.9586-1.3665.2801-2.7856.1456-4.0751-.3863-1.28954-.532-2.39074-1.437-3.16233-2.5992C5.39658 14.7611 4.98979 13.395 5 12.0001v-2m14 0v2c-.0004.4124-.0372.824-.11 1.23m-6.89 5.77v4M9 9.00009v3.00001c.00052.593.17675 1.1725.50643 1.6653.32968.4929.79807.877 1.34587 1.1038.5479.2269 1.1506.2863 1.7322.1708.5816-.1156 1.116-.4009 1.5355-.8199L9 9.00009Z"
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

export default BordMicOffIcon;
