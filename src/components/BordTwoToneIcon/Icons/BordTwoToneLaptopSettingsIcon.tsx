import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneLaptopSettingsIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M24.0001 12.9522v1.7143m0-1.7143c-1.5424 0-2.9013-.7576-3.6983-1.9079m3.6983 1.9079c1.5424 0 2.9012-.7576 3.6982-1.9079m-3.6982-6.66351c1.5425 0 2.9014.75772 3.6984 1.90821m-3.6984-1.90821c-1.5425 0-2.9015.75772-3.6984 1.90821m3.6984-1.90821V2.6665m5.3333 2.57143L27.6985 6.289m-9.0312 5.8061 1.6345-1.0508m-1.6351-5.80637 1.635 1.05107m9.0312 5.8061-1.6346-1.0508m.0002-4.7553c.4713.68032.746 1.49797.746 2.3775 0 .87965-.2748 1.6974-.7462 2.3778M20.3017 6.289c-.4713.68032-.7461 1.49797-.7461 2.3775 0 .87965.2749 1.6974.7462 2.3778"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.33342 20V9.33333c0-2.51415 0-3.77123.78104-4.55228C6.89551 4 8.15259 4 10.6667 4h4m12 16v-2M5.35946 20l-.69589 1.3539c-1.92383 3.5487-2.40292 5.323-1.67166 6.6512.73126 1.3282 2.67006 1.3282 6.54767 1.3282H22.4606c3.8776 0 5.8164 0 6.5477-1.3282.7312-1.3282.252-3.1025-1.6718-6.6512L26.6025 20H5.35946Z"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneLaptopSettingsIcon;
