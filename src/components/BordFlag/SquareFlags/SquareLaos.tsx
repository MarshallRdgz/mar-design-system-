const SquareLaos = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="#232C80" rx="2" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M10.9999 10.6668C12.4456 10.6668 13.619 9.47216 13.619 8.00016C13.619 6.52816 12.4456 5.3335 10.9999 5.3335C9.55419 5.3335 8.38086 6.52816 8.38086 8.00016C8.38086 9.47216 9.55419 10.6668 10.9999 10.6668Z"
            clipRule="evenodd"
          />
          <path
            fill="#F93939"
            fillRule="evenodd"
            d="M0 11.7333H22V16H0V11.7333ZM0 0H22V4.26667H0V0Z"
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

export default SquareLaos;
