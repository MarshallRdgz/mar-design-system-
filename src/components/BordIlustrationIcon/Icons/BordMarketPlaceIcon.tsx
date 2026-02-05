const BordMarketPlaceIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M30.327 2.48h-4.435c-1.716 0-3.089 0-4.186.116-1.13.12-2.09.37-2.927.957a5.93 5.93 0 0 0-1.457 1.456c-.586.838-.837 1.798-.956 2.928-.116 1.097-.116 2.47-.116 4.186v.122c0 1.716 0 3.089.116 4.186.119 1.13.37 2.09.956 2.927a5.93 5.93 0 0 0 1.457 1.457c.837.586 1.798.837 2.927.956.784.083 1.708.107 2.797.113.66.004 1.241.508 1.105 1.154-.078.372-.117.558-.393.782-.275.223-.55.223-1.097.223h-1.399a1.078 1.078 0 0 0 0 2.157h10.782a1.078 1.078 0 1 0 0-2.157h-1.399c-.548 0-.822 0-1.098-.223-.275-.224-.314-.41-.393-.782-.136-.646.446-1.15 1.105-1.154 1.09-.006 2.013-.03 2.797-.113 1.13-.119 2.09-.37 2.927-.956a5.929 5.929 0 0 0 1.457-1.457c.586-.837.837-1.798.956-2.927.116-1.097.116-2.47.116-4.186v-.122c0-1.716 0-3.09-.116-4.186-.119-1.13-.37-2.09-.956-2.928a5.93 5.93 0 0 0-1.457-1.456c-.837-.587-1.798-.838-2.927-.957-1.097-.115-2.47-.115-4.186-.115Z"
        clipRule="evenodd"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          fillRule="evenodd"
          d="M1.568 4.525c0-1.129.916-2.044 2.045-2.044h1.92a6.135 6.135 0 0 1 5.95 4.646l.01.038 1.056 5.029H38.27c1.03 0 1.978 0 2.735.12.849.134 1.733.459 2.358 1.32.602.828.68 1.765.62 2.623-.055.808-.255 1.8-.483 2.93l-.02.096c-.828 4.12-1.645 8.003-3.564 10.804-.994 1.451-2.287 2.627-4.008 3.426-1.704.79-3.746 1.174-6.195 1.174H17.218a2.055 2.055 0 0 1-.314.024h-1.087c-.668 0-1.397.343-2.012 1.066-.36.423-.638.932-.806 1.47h6.648a4.694 4.694 0 0 1 .648 0h13.666a4.601 4.601 0 1 1-4.25 4.09h-5.166a4.601 4.601 0 1 1-9.148 0h-3.787c-1.671 0-2.886-1.388-2.886-2.922 0-1.964.756-3.865 1.966-5.288a7.544 7.544 0 0 1 1.76-1.525 2.102 2.102 0 0 1-.04-.163L7.508 8.088A2.045 2.045 0 0 0 5.532 6.57H3.613a2.045 2.045 0 0 1-2.045-2.045Zm18.404 35.778a1.534 1.534 0 1 0 0 3.067 1.534 1.534 0 0 0 0-3.067Zm12.78 1.533a1.534 1.534 0 1 1 3.068 0 1.534 1.534 0 0 1-3.068 0Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="28.11"
          x2="28.015"
          y1="2.481"
          y2="23.67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22CFAB" />
          <stop offset="1" stopColor="#1B202F" />
        </linearGradient>
        <filter
          id="b"
          width="52.176"
          height="53.701"
          x="-3.304"
          y="-2.392"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.436" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_14000"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_14000"
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
          <feBlend in2="shape" result="effect2_innerShadow_1398_14000" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordMarketPlaceIcon;
