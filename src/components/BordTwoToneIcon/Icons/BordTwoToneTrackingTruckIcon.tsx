import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneTrackingTruckIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.32653 8 1.48656-1.17418C9.60436 6.20083 10 5.88833 10 5.5M7.32653 3l1.48656 1.17417C9.60436 4.79917 10 5.11168 10 5.5m0 0H2"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 19c0 1.1046.8954 2 2 2s2-.8954 2-2-.8954-2-2-2-2 .8954-2 2Zm0 0H9m0 0c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2 2 .8954 2 2ZM2 9v4.947c0 2.382 0 3.573.73223 4.313.48687.492 1.17105.6569 2.26777.7122M12.4271 5c.9133.2999 1.6293 1.02354 1.9261 1.94653.1468.45669.1468 1.02099.1468 2.1496 0 .7524 0 1.12857.0979 1.43307.1978.6153.6752 1.0977 1.2841 1.2977.3012.0989.6735.0989 1.418.0989H22v2.0212c0 2.382 0 3.573-.7322 4.313-.4869.492-1.1711.6569-2.2678.7122M14.5 7h1.8212c1.4554 0 2.183 0 2.7752.35371.5922.35371.9372.9944 1.6272 2.27579L22 12"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneTrackingTruckIcon;
