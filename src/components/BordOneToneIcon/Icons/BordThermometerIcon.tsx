import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordThermometerIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 14.76V3.5c0-.66304-.2634-1.29893-.7322-1.76777C12.7989 1.26339 12.163 1 11.5 1s-1.2989.26339-1.76777.73223C9.26339 2.20107 9 2.83696 9 3.5v11.26c-.80272.5363-1.41168 1.3166-1.73693 2.2256-.32525.909-.34955 1.8985-.06931 2.8223.28023.9238.85015 1.7331 1.62558 2.3082.77542.5751 1.71526.8856 2.68066.8856s1.9052-.3105 2.6807-.8856c.7754-.5751 1.3453-1.3844 1.6255-2.3082.2803-.9238.256-1.9133-.0693-2.8223-.3252-.909-.9342-1.6893-1.7369-2.2256Z"
      />
    </svg>
  );
};

export default BordThermometerIcon;
