const SquareMarshallIslands = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#1A47B8" rx="2" />
          <path
            fill="white"
            d="M5.23782 7.46686C6.39498 7.46686 7.33305 6.51174 7.33305 5.33353C7.33305 4.15532 6.39498 3.2002 5.23782 3.2002C4.08065 3.2002 3.14258 4.15532 3.14258 5.33353C3.14258 6.51174 4.08065 7.46686 5.23782 7.46686Z"
          />
          <path fill="white" fillRule="evenodd" d="M0 16.0002L22 6.4002V3.2002L0 16.0002Z" clipRule="evenodd" />
          <path fill="#FF6C2D" fillRule="evenodd" d="M0 16L22 0V3.2L0 16Z" clipRule="evenodd" />
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

export default SquareMarshallIslands;
