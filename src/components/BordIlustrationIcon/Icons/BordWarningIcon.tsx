const BordWarningIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <path
        fill="url(#a)"
        d="m25.38 8.766-9.584 7.922a15.33 15.33 0 0 0-5.308 8.949 15.366 15.366 0 0 0 3.251 12.727 15.33 15.33 0 0 0 8.949 5.309c.967.186 1.952.28 2.937.279a15.338 15.338 0 0 0 9.788-3.53A15.366 15.366 0 0 0 41 28.531a15.338 15.338 0 0 0-3.53-9.787l-7.92-9.582a2.963 2.963 0 0 0-4.173-.395l.002-.002Z"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          d="m23.725 5.565-10.11 8.361a16.177 16.177 0 0 0-5.599 9.444A16.214 16.214 0 0 0 11.45 36.8a16.176 16.176 0 0 0 9.444 5.599c1.02.196 2.06.295 3.1.293a16.184 16.184 0 0 0 10.326-3.727 16.214 16.214 0 0 0 5.893-12.546 16.185 16.185 0 0 0-3.727-10.327l-8.36-10.109a3.127 3.127 0 0 0-4.404-.415l.003-.003Z"
        />
      </g>
      <circle
        cx="23.564"
        cy="33.406"
        r="3.252"
        fill="#FF6175"
        transform="rotate(5.408 23.564 33.406)"
      />
      <path
        fill="#FF6175"
        d="M21.113 15.799a2 2 0 0 1 2.189-2.016l4.2.398a2 2 0 0 1 1.772 2.39l-2.245 11.013a2 2 0 0 1-2.148 1.591l-1.818-.172a2 2 0 0 1-1.81-1.966l-.14-11.238Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="28.011"
          x2="39.107"
          y1="26.238"
          y2="21.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".072" stopColor="#1B202F" />
          <stop offset="1" stopColor="#FF6175" />
        </linearGradient>
        <filter
          id="b"
          width="38.49"
          height="43.843"
          x="4.723"
          y="1.849"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_14003"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_14003"
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
          <feBlend in2="shape" result="effect2_innerShadow_1398_14003" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordWarningIcon;
