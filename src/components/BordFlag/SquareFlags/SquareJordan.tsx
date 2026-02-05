const SquareJordan = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path fill="#249F58" fillRule="evenodd" d="M0 11H22V16H0V11Z" clipRule="evenodd" />
          <path fill="#151515" fillRule="evenodd" d="M0 0H22V5H0V0Z" clipRule="evenodd" />
          <path fill="#F93939" fillRule="evenodd" d="M0 0V16L14 7.98244L0 0Z" clipRule="evenodd" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M3 8L4 7.33333L4.5 6L5 7.33333L6 8L5 8.66667L4.5 10L4 8.66667L3 8Z"
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

export default SquareJordan;
