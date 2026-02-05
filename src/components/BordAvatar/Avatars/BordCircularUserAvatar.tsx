import { ComponentProps } from "react";

const BordCircularUserAvatar = (props: ComponentProps<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <rect width="31" height="31" x=".5" y=".5" fill="#052143" rx="15.5" />
      <rect width="31" height="31" x=".5" y=".5" stroke="#626C82" rx="15.5" />
      <path
        stroke="#23A5FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M22 22.75v-1.5c0-.7956-.3161-1.5587-.8787-2.1213-.5626-.5626-1.3257-.8787-2.1213-.8787h-6c-.7956 0-1.5587.3161-2.1213.8787C10.3161 19.6913 10 20.4544 10 21.25v1.5m9-10.5c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      />
    </svg>
  );
};

export default BordCircularUserAvatar;
