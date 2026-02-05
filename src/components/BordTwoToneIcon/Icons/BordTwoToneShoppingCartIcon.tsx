import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneShoppingCartIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h4l2.68 13.39c.09144.4604.34191.874.70755 1.1683.36563.2943.82315.4507 1.29245.4417h9.72c.4693.009.9268-.1474 1.2925-.4417.3656-.2943.6161-.7079.7075-1.1683L23 6H6"
        opacity={opacity2}
      />
      <g
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        opacity={opacity1 || ".4"}
      >
        <path d="M20 22c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1ZM9 22c.55228 0 1-.4477 1-1s-.44772-1-1-1-1 .4477-1 1 .44772 1 1 1Z" />
      </g>
    </svg>
  );
};

export default BordTwoToneShoppingCartIcon;
