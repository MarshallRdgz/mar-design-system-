const BordPinIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <path
        fill="url(#a)"
        d="M12.74 38.388A2 2 0 0 1 13.921 38H34.08a2 2 0 0 1 1.183.388l6.815 5c1.558 1.143.75 3.612-1.183 3.612H7.107c-1.932 0-2.741-2.47-1.183-3.612l6.815-5Z"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          fillRule="evenodd"
          d="M24.25 4.73C14.916 4.73 7 12.445 7 21.85c0 4.816 2.038 8.843 4.895 12.166 2.845 3.309 6.549 5.977 10.017 8.124l.022.014.024.013a4.664 4.664 0 0 0 4.584 0l.02-.011.02-.012c3.48-2.13 7.185-4.807 10.029-8.126C39.466 30.686 41.5 26.65 41.5 21.85c0-9.405-7.916-17.118-17.25-17.118Zm0 10.174a7.077 7.077 0 1 0 0 14.154 7.077 7.077 0 0 0 0-14.154Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="24"
          x2="24"
          y1="38"
          y2="47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#070F21" />
          <stop offset="1" stopColor="#22CFAB" />
        </linearGradient>
        <filter
          id="b"
          width="44.244"
          height="47.783"
          x="2.128"
          y="-.141"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.436" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_13998"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_13998"
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
          <feBlend in2="shape" result="effect2_innerShadow_1398_13998" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordPinIcon;
