import { ITwoToneIconProps } from "../BordTwoToneIcon.types";
import { bordColorTheme } from "../../../styles/constants";

const BordTwoToneEmployeeIcon = (props: ITwoToneIconProps) => {
  const { colorTones } = props;
  const { tone1, tone2, opacity1, opacity2 } = colorTones || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={tone1 || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20.774 18c.7493 0 1.3453-.4715 1.8804-1.1309 1.0955-1.3497-.7031-2.4283-1.3891-2.9565-.6973-.537-1.4759-.8412-2.2653-.9126m-1-2c1.3807 0 2.5-1.11929 2.5-2.5S19.3807 6 18 6M3.22596 18c-.7493 0-1.34529-.4715-1.88041-1.1309-1.095461-1.3497.70312-2.4283 1.3891-2.9565C3.43197 13.3756 4.21058 13.0714 5 13m.5-2C4.11929 11 3 9.88071 3 8.5S4.11929 6 5.5 6"
        opacity={opacity1 || ".4"}
      />
      <path
        stroke={tone2 || bordColorTheme.navyBlue[400]}
        strokeWidth="1.5"
        d="M8.0838 15.1112c-1.02177.6318-3.70081 1.9219-2.0691 3.5362C6.81178 19.436 7.69952 20 8.81563 20h6.36877c1.1161 0 2.0038-.564 2.8009-1.3526 1.6317-1.6143-1.0473-2.9044-2.0691-3.5362-2.3961-1.4816-5.4363-1.4816-7.8324 0ZM15.5 7.5c0 1.933-1.567 3.5-3.5 3.5S8.5 9.433 8.5 7.5 10.067 4 12 4s3.5 1.567 3.5 3.5Z"
        opacity={opacity2}
      />
    </svg>
  );
};

export default BordTwoToneEmployeeIcon;
