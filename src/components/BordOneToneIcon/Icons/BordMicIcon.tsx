import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordMicIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 23h8m-4-4v4m0-4c1.8565 0 3.637-.7375 4.9497-2.0503C18.2625 15.637 19 13.8565 19 12v-2m-7 9c-1.8565 0-3.63699-.7375-4.94975-2.0503C5.7375 15.637 5 13.8565 5 12v-2m7-9c-.7956 0-1.5587.31607-2.12132.87868C9.31607 2.44129 9 3.20435 9 4v8c0 .7956.31607 1.5587.87868 2.1213C10.4413 14.6839 11.2044 15 12 15c.7956 0 1.5587-.3161 2.1213-.8787C14.6839 13.5587 15 12.7956 15 12V4c0-.79565-.3161-1.55871-.8787-2.12132C13.5587 1.31607 12.7956 1 12 1Z"
      />
    </svg>
  );
};

export default BordMicIcon;
