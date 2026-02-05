import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordEyeOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.9 4.24c.6883-.16112 1.3931-.24166 2.1-.24 7 0 11 8 11 8-.607 1.1356-1.3309 2.2047-2.16 3.19m-6.72-1.07c-.2746.2947-.6059.5312-.9738.6951-.368.164-.7653.2522-1.1681.2593-.4028.0071-.8029-.067-1.1765-.2179-.3735-.1509-.7129-.3755-.99775-.6603-.28488-.2849-.50946-.6243-.66034-.9978-.15089-.3736-.22498-.7737-.21788-1.1765.00711-.4028.09528-.8001.25925-1.1681.16396-.3679.40037-.6992.69512-.9738M1 1l22 22m-5.06-5.06C16.2306 19.243 14.1491 19.9649 12 20c-7 0-11-8-11-8 1.24389-2.3181 2.96914-4.34339 5.06-5.94l11.88 11.88Z"
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

export default BordEyeOffIcon;
