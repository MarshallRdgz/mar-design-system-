const SquareCongo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#249F58" rx="2" />
          <path fill="#F93939" fillRule="evenodd" d="M6.28613 16L19.9052 0H22.0004V16H6.28613Z" clipRule="evenodd" />
          <path fill="#FFDA2C" fillRule="evenodd" d="M7.33333 16L22 0H14.6667L0 16H7.33333Z" clipRule="evenodd" />
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

export default SquareCongo;
