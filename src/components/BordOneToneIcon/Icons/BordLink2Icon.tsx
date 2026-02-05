import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordLink2Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 7h3c.6566 0 1.3068.12933 1.9134.3806.6066.25128 1.1578.61957 1.6221 1.08387.4643.46429.8326 1.01549 1.0839 1.62213C22.8707 10.6932 23 11.3434 23 12c0 .6566-.1293 1.3068-.3806 1.9134-.2513.6066-.6196 1.1578-1.0839 1.6221-.4643.4643-1.0155.8326-1.6221 1.0839C19.3068 16.8707 18.6566 17 18 17h-3m-6 0H6c-.65661 0-1.30679-.1293-1.91342-.3806-.60663-.2513-1.15782-.6196-1.62211-1.0839C1.52678 14.5979 1 13.3261 1 12c0-1.3261.52678-2.59785 1.46447-3.53553C3.40215 7.52678 4.67392 7 6 7h3m-1 5h8"
      />
    </svg>
  );
};

export default BordLink2Icon;
