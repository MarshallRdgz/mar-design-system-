import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordCameraOffIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <g clipPath="url(#a)">
        <path
          stroke={stroke ||  bordColorTheme.navyBlue[400]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 22 22M9 3h6l2 3h4c.5304 0 1.0391.21071 1.4142.58579C22.7893 6.96086 23 7.46957 23 8v9.34m-7.72-2.06c-.3319.485-.7666.891-1.2732 1.189-.5066.2979-1.0726.4806-1.6579.535-.5852.0544-1.1752-.0209-1.728-.2204s-1.05489-.5184-1.47048-.934c-.41559-.4156-.73449-.9177-.93402-1.4705-.19952-.5528-.27477-1.1428-.22039-1.728.05438-.5853.23705-1.1513.53502-1.6579.29797-.5066.70392-.9413 1.18897-1.2732M21 21H3c-.53043 0-1.03914-.2107-1.41421-.5858C1.21071 20.0391 1 19.5304 1 19V8c0-.53043.21071-1.03914.58579-1.41421C1.96086 6.21071 2.46957 6 3 6h3l15 15Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BordCameraOffIcon;
