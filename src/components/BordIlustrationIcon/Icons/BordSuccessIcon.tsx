const BordSuccessIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <circle cx="24.487" cy="23.256" r="18.513" fill="url(#a)" />
      <g filter="url(#b)">
        <circle
          cx="23.513"
          cy="23.744"
          r="18.513"
          fill="#fff"
          fillOpacity=".1"
        />
      </g>
      <path
        fill="#22CFAB"
        d="M16.286 22.014a1.727 1.727 0 0 1 2.437-.17l6.092 5.302c.72.627.795 1.717.169 2.437l-1.25 1.437a1.727 1.727 0 0 1-2.437.169l-6.092-5.302a1.727 1.727 0 0 1-.17-2.436l1.25-1.437Z"
      />
      <path
        fill="#22CFAB"
        d="M19.871 29.957a1.727 1.727 0 0 1-.17-2.437l9.141-10.504a1.727 1.727 0 0 1 2.437-.169l1.436 1.25c.72.627.796 1.718.17 2.437l-9.14 10.504a1.727 1.727 0 0 1-2.437.169l-1.437-1.25Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="23.026"
          x2="5.975"
          y1="23.256"
          y2="19.846"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1B202F" />
          <stop offset="1" stopColor="#22CFAB" />
        </linearGradient>
        <filter
          id="b"
          width="41.025"
          height="41.025"
          x="3"
          y="3.231"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_14005"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_14005"
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
          <feColorMatrix values="0 0 0 0 0.705882 0 0 0 0 0.92549 0 0 0 0 0.854902 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1398_14005" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordSuccessIcon;
