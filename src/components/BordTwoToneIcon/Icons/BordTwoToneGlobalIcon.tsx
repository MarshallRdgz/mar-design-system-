import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneGlobalIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 5.69899c-.9347.06737-2.1319.42925-2.9621 1.50378-1.4994 1.94084-2.9989 2.10279-3.9985 1.45584-1.4995-.97041-.2394-2.54225-1.9993-3.39646C9.89313 4.70542 9.73321 3.19045 10.3716 2M2 11c.7625.6621 1.83046 1.2682 3.08874 1.2682 2.59969 0 3.11963.4967 3.11963 2.4836s0 1.9869.51994 3.477c.3382.9693.45641 1.9386-.21771 2.7712M22 13.4523c-.8871-.5112-2-.7215-3.1266.0882-2.1557 1.5493-3.642.2655-4.3115 1.5484C13.5765 16.9775 17.0957 17.5711 14 22"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeWidth="1.5"
        d="M22 12c0-5.52285-4.4772-10-10-10C6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10Z"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneGlobalIcon;
