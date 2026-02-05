import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneMacLaptopSettingsIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23.8237 3.76036c-.7581.73713-2.198.5338-2.198.5338s-.2086-1.39808.5502-2.13521c.7581-.73644 2.198-.53312 2.198-.53312s.2086 1.39741-.5502 2.13453Zm-7.8239 6.04048c0 2.23106 1.5372 4.79406 3.0933 5.33596.539.1877 1.0969-.0714 1.5603-.3944.3514-.2448.777-.478 1.1214-.478.343 0 .77.2332 1.1207.478.4634.323 1.0213.5821 1.561.3944 1.1053-.3849 2.2015-1.7904 2.7433-3.3728-1.05-.2924-1.8158-1.2145-1.8158-2.30725 0-1.00096.6433-1.85913 1.5582-2.22021-.5894-1.01728-1.5526-1.55653-2.6411-1.55653-.5628 0-1.0808.22032-1.498.48485-.6678.4216-1.3895.4216-2.0566 0-.4179-.26453-.9352-.48485-1.498-.48485-1.7948 0-3.2487 1.46541-3.2487 4.12083Z"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.33341 20V9.33333c0-2.51415 0-3.77123.78105-4.55228C6.89551 4 8.15259 4 10.6667 4h4m12 16v-2M5.35946 20l-.69589 1.3539c-1.92383 3.5487-2.40292 5.323-1.67166 6.6512.73126 1.3282 2.67006 1.3282 6.54767 1.3282H22.4606c3.8776 0 5.8164 0 6.5477-1.3282.7312-1.3282.252-3.1025-1.6718-6.6512L26.6025 20H5.35946Z"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneMacLaptopSettingsIcon;
