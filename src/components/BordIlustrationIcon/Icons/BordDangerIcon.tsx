const BordDangerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <circle cx="24.488" cy="23.256" r="18.513" fill="url(#a)" />
      <g filter="url(#b)">
        <circle
          cx="23.513"
          cy="23.744"
          r="18.513"
          fill="#fff"
          fillOpacity=".2"
        />
      </g>
      <path
        fill="#FF6175"
        d="M16.796 14.858a.974.974 0 0 1 1.378 0l14.47 14.469c.38.38.38.997 0 1.378l-2.412 2.411a.974.974 0 0 1-1.378 0L14.385 18.648a.974.974 0 0 1 0-1.378l2.411-2.412Z"
      />
      <path
        fill="#FF6175"
        d="M14.385 30.705a.974.974 0 0 1 0-1.378l14.469-14.469a.974.974 0 0 1 1.378 0l2.411 2.412c.38.38.38.997 0 1.378L18.175 33.116a.974.974 0 0 1-1.378 0l-2.412-2.411Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="22.782"
          x2="5.975"
          y1="24.474"
          y2="16.679"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".072" stopColor="#1B202F" />
          <stop offset="1" stopColor="#FF6175" />
        </linearGradient>
        <filter
          id="b"
          width="43.025"
          height="43.026"
          x="2"
          y="2.23"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_14004"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_14004"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.6" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.835294 0 0 0 0 0.847059 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1398_14004" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordDangerIcon;
