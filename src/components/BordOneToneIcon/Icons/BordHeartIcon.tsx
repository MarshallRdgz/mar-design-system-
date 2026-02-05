import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordHeartIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.8401 4.61012c-.5107-.511-1.1172-.91636-1.7846-1.19292-.6675-.27656-1.3829-.41891-2.1054-.41891-.7225 0-1.4379.14235-2.1053.41891-.6675.27656-1.2739.68192-1.7847 1.19292l-1.06 1.06-1.06-1.06c-1.03167-1.0317-2.43095-1.61129-3.88998-1.61129-1.45903 0-2.85831.57959-3.89 1.61129-1.03169 1.03169-1.61129 2.43096-1.61129 3.89 0 1.45903.5796 2.85828 1.61129 3.88998l8.83998 8.84 8.84-8.84c.511-.5107.9164-1.1172 1.1929-1.7846.2766-.66749.4189-1.3829.4189-2.10538 0-.72249-.1423-1.4379-.4189-2.10536-.2765-.66746-.6819-1.27389-1.1929-1.78464Z"
      />
    </svg>
  );
};

export default BordHeartIcon;
