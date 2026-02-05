const SquareFrance = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path fill="#1A47B8" fillRule="evenodd" d="M0 0H7V16H0V0Z" clipRule="evenodd" />
          <path fill="#F93939" fillRule="evenodd" d="M15 0H22V16H15V0Z" clipRule="evenodd" />
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

export default SquareFrance;
