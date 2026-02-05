const SquareMauritius = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#FFDA2C" rx="2" />
          <path fill="#00B731" fillRule="evenodd" d="M0 12H22V16H0V12Z" clipRule="evenodd" />
          <path fill="#1A47B8" fillRule="evenodd" d="M0 4H22V9H0V4Z" clipRule="evenodd" />
          <path fill="#F93939" fillRule="evenodd" d="M0 0H22V4H0V0Z" clipRule="evenodd" />
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

export default SquareMauritius;
