const BordBoxIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M15.723 12.39a6.83 6.83 0 0 1 13.553 0H15.723Zm-3.432 0C12.725 7.132 17.13 3 22.5 3c5.37 0 9.775 4.132 10.209 9.39h2.535c.84 0 1.606 0 2.22.09.673.098 1.39.334 1.926.987.529.646.627 1.394.608 2.074-.018.629-.147 1.398-.291 2.254l-2.082 12.421c-.33 1.963-.595 3.55-.961 4.791-.38 1.29-.91 2.358-1.862 3.183-.956.828-2.081 1.188-3.396 1.356-1.257.161-2.828.161-4.76.161h-8.292c-1.931 0-3.503 0-4.76-.16-1.315-.169-2.44-.529-3.396-1.357-.952-.825-1.481-1.894-1.862-3.183-.366-1.24-.632-2.828-.96-4.79l-2.07-12.34-.013-.081c-.144-.857-.273-1.626-.29-2.255-.02-.68.078-1.428.607-2.074.535-.653 1.253-.889 1.927-.987.613-.09 1.378-.09 2.219-.09h2.535Z"
        clipRule="evenodd"
      />
      <g filter="url(#b)">
        <path
          fill="#fff"
          fillOpacity=".2"
          fillRule="evenodd"
          d="M41.158 19.592c-.627-.627-1.57-.977-2.502-1.191-.962-.221-2.064-.33-3.146-.375-2.168-.09-4.383.071-5.516.175a3.361 3.361 0 0 0-1.884.806A115.817 115.817 0 0 0 17.2 29.687c-1.563 1.746-1.58 4.353-.172 6.17a43.246 43.246 0 0 0 7.863 7.864c1.818 1.408 4.425 1.39 6.17-.172A115.817 115.817 0 0 0 41.744 32.64c.451-.525.74-1.178.806-1.884.104-1.133.265-3.348.175-5.516-.045-1.082-.154-2.184-.375-3.146-.214-.931-.563-1.875-1.19-2.502Zm-13.032 6.806a1.244 1.244 0 0 0 0 2.489h.019a1.244 1.244 0 0 0 0-2.489h-.019Zm.005 9.954a1.244 1.244 0 1 0 0 2.488h.018a1.244 1.244 0 0 0 0-2.488h-.018Zm-6.22-3.733c0-.687.556-1.244 1.243-1.244h9.954a1.244 1.244 0 0 1 0 2.488h-9.954a1.244 1.244 0 0 1-1.244-1.244Zm14.307-9.953a1.866 1.866 0 1 1 0 3.732 1.866 1.866 0 0 1 0-3.732Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="22.5"
          x2="22.53"
          y1="3"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22CFAB" />
          <stop offset="1" stopColor="#1B202F" />
        </linearGradient>
        <filter
          id="b"
          width="36.494"
          height="36.494"
          x="11.128"
          y="13.128"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.436" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1398_14002"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1398_14002"
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
          <feBlend in2="shape" result="effect2_innerShadow_1398_14002" />
        </filter>
      </defs>
    </svg>
  );
};

export default BordBoxIcon;
