import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGitlabIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m22.6501 14.39-10.65 7.74-10.64996-7.74c-.14277-.105-.24868-.2525-.30256-.4213-.053886-.1689-.052988-.3504.00256-.5187l1.22-3.78004 2.44-7.51c.02367-.06119.06134-.11599.11-.16.07924-.07238.18268-.11251.29-.11251.10732 0 .21077.04013.29.11251.05139.04967.08925.11162.11.18l2.44 7.49h8.09996l2.44-7.51c.0237-.06119.0614-.11599.11-.16.0793-.07238.1827-.11251.29-.11251.1074 0 .2108.04013.29.11251.0514.04967.0893.11162.11.18l2.44 7.51 1.27 3.76004c.0506.1734.0438.3586-.0192.5279-.0631.1694-.1791.3139-.3308.4121Z"
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

export default BordGitlabIcon;
