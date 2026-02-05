import { ComponentProps } from "react";

const BordNotificationOffIcon = ({ onClick }: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <path
        stroke="#C6C7CB"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.442 17.5a1.667 1.667 0 0 1-2.884 0M15 6.667a5 5 0 0 0-10 0c0 5.833-2.5 7.5-2.5 7.5h15S15 12.5 15 6.667Z"
      />
    </svg>
  );
};

export default BordNotificationOffIcon;
