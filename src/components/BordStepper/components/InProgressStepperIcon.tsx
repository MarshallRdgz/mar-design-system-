import React, { FC } from "react";

interface InProgressStepperProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  fill?: string;
  strokeWidth?: number;
}

const InProgressStepper: FC<InProgressStepperProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={32} height={32}>
      <rect width="31" height="31" x=".5" y=".5" stroke="#23A5FF" rx="15.5" />
      <rect width="26" height="26" x="3" y="3" fill="#23A5FF" rx="13" />
      <g clipPath="url(#a)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.1"
          d="M16 19.5v2.334m2.473-3.36 1.65 1.65m-8.248 0 1.651-1.65M19.499 16h2.334m-11.667 0h2.333m5.974-2.473 1.65-1.65m-8.248 0 1.651 1.65m2.473-3.36V12.5"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M9 9h14v14H9z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InProgressStepper;
