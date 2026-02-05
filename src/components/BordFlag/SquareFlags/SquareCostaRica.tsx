const SquareCostaRica = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <rect width="22" height="16" fill="#1A47B8" rx="2" />
        <path fill="white" fillRule="evenodd" d="M0 3H22V5H0V3Z" clipRule="evenodd" />
        <path fill="#F93939" fillRule="evenodd" d="M0 5H22V11H0V5Z" clipRule="evenodd" />
        <path fill="white" fillRule="evenodd" d="M0 11H22V13H0V11Z" clipRule="evenodd" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="white" d="M0 0H22V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquareCostaRica;
