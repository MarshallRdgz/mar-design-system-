const SquareJamaica = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#249F58" rx="2" />
          <path
            fill="#151515"
            fillRule="evenodd"
            d="M0 0L10.4762 8.53333L0 16V0ZM22 0L11.5238 8.53333L22 16V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#FFDA2C"
            fillRule="evenodd"
            d="M9.07971 8L0 1.6V0H1.57143L11 6.64533L20.4286 0H22V1.6L12.9203 8L22 14.4V16H20.4286L11 9.35467L1.57143 16H0V14.4L9.07971 8Z"
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

export default SquareJamaica;
