const SquareCuba = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path
            fill="#1A47B8"
            fillRule="evenodd"
            d="M0 6.3999H22V9.5999H0V6.3999ZM0 12.7999H22V15.9999H0V12.7999Z"
            clipRule="evenodd"
          />
          <path fill="#1A47B8" d="M0 0H22V3H0z" />
          <path fill="#F93939" fillRule="evenodd" d="M0 0L12.5714 8L0 16V0Z" clipRule="evenodd" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M4.58694 9.3335L3.04694 10.158L3.34027 8.4119L2.0957 7.17456L3.81694 6.92176L4.58694 5.3335L5.35694 6.92283L7.07818 7.17563L5.83151 8.41296L6.12485 10.158"
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

export default SquareCuba;
