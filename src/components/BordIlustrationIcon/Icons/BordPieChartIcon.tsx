const BordPieChartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <circle cx="19.429" cy="28.571" r="19.429" fill="url(#a)" />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          d="M40.768 27.899c1.661-.32 2.491-.48 2.776-.192a.69.69 0 0 1 .082.098c.232.332-.012.958-.5 2.209-2.82 7.238-9.858 12.367-18.094 12.367-10.721 0-19.413-8.691-19.413-19.413 0-8.236 5.13-15.274 12.367-18.095 1.251-.487 1.877-.73 2.209-.499.039.028.064.049.098.082.288.285.128 1.115-.192 2.776-.278 1.443-.278 3.134-.277 4.671V16.446c0 1.614 0 3.219.179 4.555.204 1.521.71 3.308 2.198 4.797 1.49 1.49 3.276 1.994 4.798 2.199 1.335.18 2.94.18 4.552.18h4.545c1.537 0 3.229 0 4.672-.278Z"
        />
      </g>
      <g filter="url(#c)">
        <path
          fill="#fff"
          fillOpacity=".2"
          d="m32.158 4.573-.123-.051c-1.19-.494-2.3-.953-3.326-1.119-1.198-.192-2.291.002-3.428.705a6.22 6.22 0 0 0-.317.21c-1.163.84-1.721 1.936-1.975 3.253-.227 1.18-.227 2.645-.227 4.331v4.25c0 1.743 0 3.194.154 4.346.164 1.215.523 2.308 1.4 3.185.878.878 1.97 1.237 3.185 1.4 1.152.155 2.603.155 4.347.155h4.25c1.686 0 3.15 0 4.33-.227 1.317-.254 2.414-.812 3.253-1.976.063-.087.154-.224.211-.316.702-1.137.897-2.23.704-3.428-.165-1.027-.624-2.136-1.118-3.327l-.051-.123A20.821 20.821 0 0 0 32.158 4.573Z"
        />
      </g>
      <defs>
        <filter
          id="b"
          width="44.267"
          height="44.267"
          x="2.533"
          y="1.2"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.543" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_13996"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_13996"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.057" />
          <feGaussianBlur stdDeviation="2.674" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.705882 0 0 0 0 0.92549 0 0 0 0 0.854902 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1398_13996" />
        </filter>
        <filter
          id="c"
          width="28.076"
          height="28.076"
          x="19.676"
          y=".247"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.543" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_13996"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_13996"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.057" />
          <feGaussianBlur stdDeviation="2.674" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.705882 0 0 0 0 0.92549 0 0 0 0 0.854902 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_1398_13996" />
        </filter>
        <linearGradient
          id="a"
          x1="19.429"
          x2="19.429"
          y1="9.143"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#070F21" />
          <stop offset="1" stopColor="#22CFAB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BordPieChartIcon;
