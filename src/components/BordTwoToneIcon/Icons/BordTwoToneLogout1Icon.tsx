import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneLogout1Icon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 12H11m10 0c0-.7002-1.9943-2.00847-2.5-2.5M21 12c0 .7002-1.9943 2.0085-2.5 2.5"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3 7.29807 3 3 7.02944 3 12c0 4.9706 4.29807 9 9.6 9 .4755 0 .943-.0324 1.4-.095"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneLogout1Icon;
