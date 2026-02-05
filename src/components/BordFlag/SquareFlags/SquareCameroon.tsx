const SquareCameroon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <path
            fill="#F93939"
            d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
          />
          <path
            fill="#FFDA2C"
            fillRule="evenodd"
            d="M11 9.3335L9.46003 10.158L9.75336 8.4119L8.50879 7.17456L10.23 6.92176L11 5.3335L11.77 6.92283L13.4913 7.17563L12.2446 8.41296L12.5379 10.158"
            clipRule="evenodd"
          />
          <path fill="#249F58" fillRule="evenodd" d="M0 0H7V16H0V0Z" clipRule="evenodd" />
          <path fill="#FFDA2C" fillRule="evenodd" d="M15 0H22V16H15V0Z" clipRule="evenodd" />
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

export default SquareCameroon;
