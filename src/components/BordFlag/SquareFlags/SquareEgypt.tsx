const SquareEgypt = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <path
            fill="white"
            d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
          />
          <path fill="#151515" fillRule="evenodd" d="M0 11H22V16H0V11Z" clipRule="evenodd" />
          <path fill="#F93939" fillRule="evenodd" d="M0 0H22V5H0V0Z" clipRule="evenodd" />
          <path
            fill="#D4AF2C"
            fillRule="evenodd"
            d="M10.9999 7.46657L9.42848 6.3999L8.38086 7.46657L9.42848 9.5999L10.4761 8.53324H11.5237L12.5713 9.5999L13.619 7.46657L12.5713 6.3999L10.9999 7.46657Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="white" d="M0 0H22V16H0z" />
        </clipPath>
        <clipPath id="b">
          <rect width="22" height="16" fill="white" rx="2" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquareEgypt;
