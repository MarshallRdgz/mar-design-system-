import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBookOpenIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 7c0-1.06087.4214-2.07828 1.1716-2.82843C13.9217 3.42143 14.9391 3 16 3h6v15h-7c-.7956 0-1.5587.3161-2.1213.8787C12.3161 19.4413 12 20.2044 12 21m0-14v14m0-14c0-1.06087-.4214-2.07828-1.1716-2.82843C10.0783 3.42143 9.06087 3 8 3H2v15h7c.79565 0 1.5587.3161 2.1213.8787C11.6839 19.4413 12 20.2044 12 21"
      />
    </svg>
  );
};

export default BordBookOpenIcon;
