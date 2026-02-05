const SquareBulgaria = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <path
            fill="#249F58"
            d="M19.9048 0H2.09524C.93807 0 0 .955126 0 2.13333V13.8667C0 15.0449.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 .955126 21.0619 0 19.9048 0Z"
          />
          <path
            fill="#F93939"
            fillRule="evenodd"
            d="M0 11h22v5H0v-5Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0h22v5H0V0Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h22v16H0z" />
        </clipPath>
        <clipPath id="b">
          <rect width="22" height="16" fill="#fff" rx="2" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquareBulgaria;
