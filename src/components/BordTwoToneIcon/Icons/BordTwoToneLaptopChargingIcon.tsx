import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneLaptopChargingIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="m16.6168 8-1.8587 2.4165c-.1991.259-.0564.6316.2684.7005l1.9471.4133c.3463.0735.4783.486.2362.7378l-2.3061 2.3986"
        opacity={opacity1 || "0.4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M26.6667 19.3335V8.66683c0-2.51416 0-3.77124-.781-4.55229-.7811-.78104-2.0381-.78104-4.5523-.78104H10.6667c-2.51411 0-3.77119 0-4.55224.78104-.78104.78105-.78104 2.03813-.78104 4.55229V19.3335m.02604 0-.69589 1.3539c-1.92383 3.5487-2.40292 5.323-1.67166 6.6512.73126 1.3282 2.67006 1.3282 6.54767 1.3282H22.4606c3.8776 0 5.8164 0 6.5477-1.3282.7312-1.3282.252-3.1025-1.6718-6.6512l-.734-1.3539H5.35946Z"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneLaptopChargingIcon;
