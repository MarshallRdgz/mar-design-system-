const SquareLebanon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path fill="#F93939" fillRule="evenodd" d="M0 12H22V16H0V12ZM0 0H22V4H0V0Z" clipRule="evenodd" />
          <path
            fill="#249F58"
            fillRule="evenodd"
            d="M10.9997 4.2666L7.33301 10.6666H9.42825L10.9997 11.7333L12.5711 10.6666H14.6663L10.9997 4.2666Z"
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

export default SquareLebanon;
