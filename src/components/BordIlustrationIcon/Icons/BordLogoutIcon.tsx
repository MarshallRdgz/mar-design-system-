const BordLogoutIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <path
        fill="url(#a)"
        d="M21.5 26.012a2 2 0 1 1 0-4h13v-1.189c0-.351 0-.782.044-1.135v-.007c.032-.253.176-1.405 1.307-1.954 1.133-.55 2.134.054 2.35.185l.937.678c.752.59 1.78 1.4 2.563 2.162.39.38.792.814 1.11 1.276.282.41.69 1.11.69 1.972 0 .861-.407 1.562-.69 1.972-.318.462-.72.897-1.11 1.276-.782.761-1.811 1.572-2.563 2.162l-.937.678c-.216.13-1.217.735-2.35.185-1.131-.55-1.275-1.701-1.306-1.954l-.001-.007c-.044-.353-.044-.784-.044-1.135v-1.165h-13Z"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          fillRule="evenodd"
          d="M30 12v28s.009 2.067 0 2c0 1-.134 1.642-1.229 1.791-1.003.138-2.029.209-3.071.209-11.585 0-21.2-8.835-21.2-20S14.115 4 25.7 4c1.042 0 2.068.071 3.071.209C29.866 4.359 30 5 30 6v6Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="19.5"
          x2="43.5"
          y1="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#070F21" />
          <stop offset="1" stopColor="#22CFAB" />
        </linearGradient>
        <filter
          id="b"
          width="35.248"
          height="49.744"
          x="-.372"
          y="-.872"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.436" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_13997"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_13997"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3.248" />
          <feGaussianBlur stdDeviation="4.223" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.705882 0 0 0 0 0.92549 0 0 0 0 0.854902 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1398_13997" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordLogoutIcon;
