const SquareNiger = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path fill="#00B731" fillRule="evenodd" d="M0 11H22V16H0V11Z" clipRule="evenodd" />
          <path fill="#FF6C2D" fillRule="evenodd" d="M0 0H22V5H0V0Z" clipRule="evenodd" />
          <path
            fill="#FF6C2D"
            d="M11.0001 9.5999C11.868 9.5999 12.5716 8.88356 12.5716 7.9999C12.5716 7.11625 11.868 6.3999 11.0001 6.3999C10.1323 6.3999 9.42871 7.11625 9.42871 7.9999C9.42871 8.88356 10.1323 9.5999 11.0001 9.5999Z"
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

export default SquareNiger;
