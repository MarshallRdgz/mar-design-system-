const SquareMexico = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path fill="#F93939" d="M16 0H22V16H16z" />
          <path fill="#249F58" d="M0 0H6V16H0z" />
          <path
            fill="#249F58"
            fillRule="evenodd"
            d="M13.9767 8.00059C13.992 8.10962 14 8.22102 14 8.3336C14 9.80604 12.6567 11 11 11C9.34333 11 8 9.80604 8 8.3336C8 8.22102 8.008 8.10962 8.02333 8C8.208 9.0239 9.47 9.81493 11 9.81493C12.53 9.81493 13.792 9.02331 13.9767 8V8.00059Z"
            clipRule="evenodd"
          />
          <ellipse cx="11.0001" cy="6.9335" fill="#AE6A3E" rx="1.57143" ry="1.6" />
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

export default SquareMexico;
