import React, { FC } from "react";

interface SuccessStepperProps {
  width?: number;
  height?: number;
  fill?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export const SuccessStepperIcon: FC<SuccessStepperProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 30" width={26} height={26}>
      <rect width="26" height="26" y="2" fill="#09A432" rx="13" />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.1"
        d="m17.667 11.5-6.416 6.417L8.334 15"
      />
    </svg>
  );
};
