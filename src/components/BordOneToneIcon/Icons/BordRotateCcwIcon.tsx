import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordRotateCcwIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 3.99995v6m0 0h6m-6 0 4.64-4.36c1.38091-1.37858 3.17245-2.27103 5.1047-2.54288 1.9322-.27186 3.9004.09161 5.6081 1.03564 1.7077.94403 3.0624 2.41748 3.8598 4.19834.7975 1.78085.9946 3.77265.5616 5.67525-.4329 1.9026-1.4725 3.613-2.9621 4.8734-1.4895 1.2604-3.3484 2.0026-5.2964 2.1147-1.948.1121-3.87972-.4119-5.50404-1.4931-1.62432-1.0812-2.85327-2.661-3.50166-4.5014"
      />
    </svg>
  );
};

export default BordRotateCcwIcon;
