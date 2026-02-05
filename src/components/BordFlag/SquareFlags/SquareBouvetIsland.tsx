const SquareBouvetIsland = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#F93939" rx="2" />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M6.28571 9.6H0V6.4h6.28571V0h3.14286v6.4H22v3.2H9.42857V16H6.28571V9.6Z"
            clipRule="evenodd"
          />
          <path
            fill="#1A47B8"
            fillRule="evenodd"
            d="M7.33333 8.53333H0V7.46667h7.33333V0h1.04762v7.46667H22v1.06666H8.38095V16H7.33333V8.53333Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h22v16H0z" />
        </clipPath>
        <clipPath id="b">
          <rect width="22" height="16" fill="#fff" rx="2" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquareBouvetIsland;
