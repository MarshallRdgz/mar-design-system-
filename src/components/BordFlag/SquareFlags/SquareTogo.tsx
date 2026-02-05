const SquareTogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#FFDA2C" rx="2" />
          <path
            fill="#0A6A30"
            fillRule="evenodd"
            d="M7.33333 0H22V3.2H7.33333V0ZM7.33333 6.4H22V9.6H7.33333V6.4ZM0 12.8H22V16H0V12.8Z"
            clipRule="evenodd"
          />
          <path fill="#F93939" fillRule="evenodd" d="M0 0H9.42857V9.6H0V0Z" clipRule="evenodd" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M4.65189 6.28999L3.07208 7.13586L3.3738 5.34386L2.0957 4.07772L3.86199 3.81639L4.65189 2.18652L5.4418 3.81532L7.20808 4.07666L5.92999 5.34599L6.2317 7.13586"
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

export default SquareTogo;
