import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLinkedinIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 9H2v12h4V9ZM16 8c1.5913 0 3.1174.63214 4.2426 1.75736C21.3679 10.8826 22 12.4087 22 14v7h-4v-7c0-.5304-.2107-1.0391-.5858-1.4142S16.5304 12 16 12c-.5304 0-1.0391.2107-1.4142.5858S14 13.4696 14 14v7h-4v-7c0-1.5913.6321-3.1174 1.7574-4.24264C12.8826 8.63214 14.4087 8 16 8ZM4 6c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2Z"
      />
    </svg>
  );
};

export default BordLinkedinIcon;
