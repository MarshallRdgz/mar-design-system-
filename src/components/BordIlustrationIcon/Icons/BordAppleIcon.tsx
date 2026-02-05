const BordAppleIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M12.204 4.144C13.278 4 14.619 4 16.175 4h13.4c1.556 0 2.897 0 3.971.144 1.151.155 2.254.504 3.15 1.399.894.895 1.243 1.998 1.398 3.149.144 1.074.144 2.415.144 3.972V26.02a.44.44 0 0 0 .053.216l.017.035.66 1.284c1.271 2.346 2.127 4.214 2.523 5.765.408 1.596.36 2.986-.333 4.244-.773 1.405-2.156 1.953-3.707 2.196-1.499.235-3.498.235-5.95.234H14.248c-2.452 0-4.45 0-5.95-.234-1.55-.243-2.933-.79-3.707-2.196-.692-1.258-.74-2.648-.333-4.244.396-1.551 1.252-3.42 2.524-5.765l.66-1.284.017-.035a.44.44 0 0 0 .052-.216V12.664c0-1.557 0-2.898.145-3.972.155-1.151.504-2.254 1.398-3.15.895-.894 1.999-1.243 3.15-1.398Zm-1.18 8.635v11.237c0 .497 0 .745.154.9.154.154.402.154.899.154h21.596c.497 0 .745 0 .9-.154.154-.155.154-.403.154-.9V12.78c0-1.705-.004-2.807-.113-3.62-.103-.76-.268-1-.402-1.133-.134-.134-.372-.299-1.134-.401-.812-.11-1.914-.113-3.619-.113H16.291c-1.705 0-2.807.003-3.62.113-.761.102-1 .267-1.133.4-.134.135-.3.373-.402 1.135-.109.812-.113 1.914-.113 3.62Z"
        clipRule="evenodd"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          d="M41.663 42.796c-1.68 1.584-3.514 1.334-5.28.584-1.868-.767-3.583-.8-5.554 0-2.469 1.033-3.771.733-5.246-.584-8.365-8.382-7.13-21.147 2.366-21.614 2.314.117 3.926 1.234 5.28 1.334 2.023-.4 3.96-1.55 6.12-1.4 2.588.2 4.543 1.2 5.828 3-5.348 3.116-4.08 9.965.823 11.881-.977 2.5-2.246 4.983-4.354 6.816l.017-.017Zm-8.605-21.714C32.8 17.366 35.902 14.3 39.468 14c.498 4.3-4.01 7.5-6.41 7.082Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="22.875"
          x2="22.902"
          y1="4"
          y2="46.165"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22CFAB" />
          <stop offset="1" stopColor="#1B202F" />
        </linearGradient>
        <filter
          id="b"
          width="35.744"
          height="39.744"
          x="15.128"
          y="9.128"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.436" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_14008"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_14008"
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
          <feBlend in2="shape" result="effect2_innerShadow_1398_14008" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordAppleIcon;
