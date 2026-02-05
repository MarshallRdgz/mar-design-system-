const SquareLithuania = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#0A6A30" rx="2" />
          <path fill="#AF010D" fillRule="evenodd" d="M0 11H22V16H0V11Z" clipRule="evenodd" />
          <path fill="#FFDA2C" fillRule="evenodd" d="M0 0H22V5H0V0Z" clipRule="evenodd" />
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

export default SquareLithuania;
