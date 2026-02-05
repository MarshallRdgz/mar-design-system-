const SquareNorway = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#AF010D" rx="2" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M6.28571 9.6H0V6.4H6.28571V0H9.42857V6.4H22V9.6H9.42857V16H6.28571V9.6Z"
            clipRule="evenodd"
          />
          <path
            fill="#1A47B8"
            fillRule="evenodd"
            d="M7.33333 8.53333H0V7.46667H7.33333V0H8.38095V7.46667H22V8.53333H8.38095V16H7.33333V8.53333Z"
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

export default SquareNorway;
