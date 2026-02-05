import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCloudRainIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 13v8m-7.99997-8v8M12 15v8m8-6.42c1.0513-.4605 1.9121-1.2685 2.4381-2.2885s.6851-2.1899.4505-3.3134c-.2345-1.12338-.8484-2.13193-1.7385-2.85631-.8902-.72437-2.0024-1.12048-3.1501-1.12183h-1.26c-.3169-1.22748-.9211-2.36205-1.7627-3.3102-.8415-.94815-1.8963-1.68273-3.0775-2.14318-1.1812-.46046-2.45486-.633606-3.71608-.50518-1.26123.12843-2.47388.55475-3.53799 1.24384-1.06412.68909-1.94923 1.6212-2.58239 2.71951-.63316 1.09832-.99623 2.33138-1.0593 3.59756-.063056 1.26618.1757 2.52919.6966 3.68499.52089 1.1558 1.30901 2.1712 2.29939 2.9627"
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

export default BordCloudRainIcon;
