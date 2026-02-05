import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUmbrellaIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 19c0 .7956-.3161 1.5587-.8787 2.1213C16.5587 21.6839 15.7956 22 15 22c-.7956 0-1.5587-.3161-2.1213-.8787C12.3161 20.5587 12 19.7956 12 19v-7m11 0c-.2612-2.73643-1.533-5.27725-3.567-7.12634C17.399 3.02458 14.7489 2 12 2 9.25114 2 6.60096 3.02458 4.56697 4.87366 2.53297 6.72275 1.2612 9.26357 1 12h22Z"
      />
    </svg>
  );
};

export default BordUmbrellaIcon;
