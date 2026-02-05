import { ComponentProps } from "react";

const BordRectangularFigmaAvatar = (props: ComponentProps<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <rect width="31" height="31" x=".5" y=".5" fill="#262B39" rx="7.5" />
      <rect width="31" height="31" x=".5" y=".5" stroke="#626C82" rx="7.5" />
      <path
        stroke="#C6C7CB"
        stroke-miterlimit="10"
        strokeWidth="1.2"
        d="M15.9996 8.5h-2.475c-1.425 0-2.55 1.125-2.55 2.475s1.125 2.475 2.475 2.475h2.55m0-4.95v4.95m0-4.95h2.475c1.35 0 2.475 1.125 2.475 2.475s-1.125 2.475-2.475 2.475h-2.475m-2.475 5.025c-1.35 0-2.475-1.125-2.475-2.475s1.125-2.475 2.475-2.475h2.475v4.95m-2.475 0h2.475m-2.475 0c-1.35 0-2.475 1.125-2.475 2.475s1.125 2.475 2.475 2.475 2.475-1.125 2.475-2.475v-2.475m2.475-4.95c1.35 0 2.475 1.125 2.475 2.475s-1.125 2.475-2.475 2.475-2.475-1.125-2.475-2.475 1.125-2.475 2.475-2.475Z"
      />
    </svg>
  );
};

export default BordRectangularFigmaAvatar;
