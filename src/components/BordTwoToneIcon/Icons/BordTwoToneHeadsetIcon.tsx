import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneHeadsetIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 18.6665v-4c0-6.62741 5.37258-12 12-12 6.6274 0 12 5.37259 12 12v6.4615c0 2.6778 0 4.0167-.4699 5.0607-.5348 1.1884-1.4862 2.1398-2.6746 2.6746-1.044.4699-2.3829.4699-5.0606.4699H16"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M28 18.6665c0 2.9455-2.3878 5.3333-5.3333 5.3333-1.4728 0-2.6667-1.1939-2.6667-2.6666v-5.3334c0-1.4727 1.1939-2.6666 2.6667-2.6666 2.9455 0 5.3333 2.3878 5.3333 5.3333Zm0 0v-4c0-6.62741-5.3726-12-12-12-6.62742 0-12 5.37259-12 12v4m0 0c0 2.9455 2.38781 5.3333 5.33333 5.3333C10.8061 23.9998 12 22.8059 12 21.3332v-5.3334c0-1.4727-1.1939-2.6666-2.66667-2.6666C6.38781 13.3332 4 15.721 4 18.6665Z"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneHeadsetIcon;
