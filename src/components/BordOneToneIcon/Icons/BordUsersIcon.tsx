import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUsersIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23 21v-2c-.0007-.8863-.2956-1.7472-.8386-2.4477-.543-.7004-1.3033-1.2007-2.1614-1.4223M17 21v-2c0-1.0609-.4214-2.0783-1.1716-2.8284C15.0783 15.4214 14.0609 15 13 15H5c-1.06087 0-2.07828.4214-2.82843 1.1716C1.42143 16.9217 1 17.9391 1 19v2M16 3.13c.8604.2203 1.623.7207 2.1676 1.42231.5446.70161.8402 1.56452.8402 2.45269 0 .88817-.2956 1.75108-.8402 2.45269C17.623 10.1593 16.8604 10.6597 16 10.88M13 7c0 2.20914-1.7909 4-4 4-2.20914 0-4-1.79086-4-4s1.79086-4 4-4c2.2091 0 4 1.79086 4 4Z"
      />
    </svg>
  );
};

export default BordUsersIcon;
