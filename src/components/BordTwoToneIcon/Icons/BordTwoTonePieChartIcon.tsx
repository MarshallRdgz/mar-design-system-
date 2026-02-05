import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoTonePieChartIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeWidth="1.5"
        d="M17.6831 12.5c1.8877 0 2.8315 0 3.441-.845.0228-.0316.0607-.0883.0811-.1214.5475-.8865.2653-1.5676-.2989-2.92982-.5117-1.23525-1.2616-2.35763-2.207-3.30305-.9455-.94542-2.0678-1.69537-3.3031-2.20703-1.3622-.56424-2.0433-.84637-2.9298-.29893-.0331.02046-.0898.05832-.1214.0811-.845.60953-.845 1.55335-.845 3.44099v2.11062c0 1.91982 0 2.87972.5964 3.47612s1.5563.5964 3.4761.5964h2.1106Z"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.5 15.8278c-2.5015 5.9282-10.63593 7.6557-15.29857 3.0363C.629484 14.3347 2.04493 6.12883 8.05653 3.5"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoTonePieChartIcon;
