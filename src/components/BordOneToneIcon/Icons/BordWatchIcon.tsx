import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordWatchIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 9.00002V12l1.5 1.5m3.01 3.85-.35 3.83c-.0451.4987-.2755.9623-.6458 1.2992-.3703.337-.8535.5228-1.3542.5208H9.83c-.50067.002-.98389-.1838-1.3542-.5208-.3703-.3369-.60074-.8005-.6458-1.2992l-.35-3.83m.01-10.69998.35-3.83c.04491-.49693.27393-.95912.64211-1.29585.36819-.33673.84894-.52368 1.34789-.52415h4.35c.5007-.002035.9839.18379 1.3542.52077.3703.33697.6007.80058.6458 1.29923l.35 3.83M19 12c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86598 3.13401-6.99998 7-6.99998 3.866 0 7 3.134 7 6.99998Z"
      />
    </svg>
  );
};

export default BordWatchIcon;
