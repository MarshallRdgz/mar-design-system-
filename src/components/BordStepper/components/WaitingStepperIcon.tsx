import React, { FC } from "react";

interface WaitingStepperIconProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  fill?: string;
  strokeWidth?: number;
}

const WaitingStepperIcon: FC<WaitingStepperIconProps> = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" stroke="#262B39" />
      <g clipPath="url(#clip0_1369_63681)">
        <path
          d="M12.9993 9.50033V13.0003L15.3327 14.167M18.8327 13.0003C18.8327 16.222 16.221 18.8337 12.9993 18.8337C9.77769 18.8337 7.16602 16.222 7.16602 13.0003C7.16602 9.77866 9.77769 7.16699 12.9993 7.16699C16.221 7.16699 18.8327 9.77866 18.8327 13.0003Z"
          stroke="#626C82"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1369_63681">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WaitingStepperIcon;
