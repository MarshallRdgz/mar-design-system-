const SquareCroatia = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16">
      <g clipPath="url(#a)">
        <g clipPath="url(#b)">
          <rect width="22" height="16" fill="white" rx="2" />
          <path fill="#1A47B8" fillRule="evenodd" d="M0 11H22V16H0V11Z" clipRule="evenodd" />
          <path fill="#F93939" fillRule="evenodd" d="M0 0H22V5H0V0Z" clipRule="evenodd" />
          <path
            fill="#3A99FF"
            fillRule="evenodd"
            d="M8.38086 4.26686H9.42848V5.33353H8.38086V4.26686ZM10.4761 3.2002H11.5237V5.33353H10.4761V3.2002ZM12.5713 4.26686H13.619V5.33353H12.5713V4.26686Z"
            clipRule="evenodd"
          />
          <path
            fill="#1A47B8"
            fillRule="evenodd"
            d="M11.5239 3.2002H12.5716V5.33353H11.5239V3.2002ZM9.42871 3.2002H10.4763V5.33353H9.42871V3.2002Z"
            clipRule="evenodd"
          />
          <mask id="c" width="6" height="7" x="8" y="5" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
            <path
              fill="white"
              d="M13.619 9.06683C13.619 10.5388 12.4456 11.7335 10.9999 11.7335C9.55419 11.7335 8.38086 10.5388 8.38086 9.06683V5.3335H13.619V9.06683Z"
            />
          </mask>
          <g mask="url(#c)">
            <path
              fill="#F93939"
              d="M13.619 9.06683C13.619 10.5388 12.4456 11.7335 10.9999 11.7335C9.55419 11.7335 8.38086 10.5388 8.38086 9.06683V5.3335H13.619V9.06683Z"
            />
            <path
              fill="white"
              fillRule="evenodd"
              d="M9.42848 10.6668H10.4761V11.7335H9.42848V10.6668ZM11.5237 10.6668H12.5713V11.7335H11.5237V10.6668ZM10.4761 9.60016H11.5237V10.6668H10.4761V9.60016ZM9.42848 8.5335H10.4761V9.60016H9.42848V8.5335ZM11.5237 8.5335H12.5713V9.60016H11.5237V8.5335ZM10.4761 7.46683H11.5237V8.5335H10.4761V7.46683ZM9.42848 6.40016H10.4761V7.46683H9.42848V6.40016ZM11.5237 6.40016H12.5713V7.46683H11.5237V6.40016ZM10.4761 5.3335H11.5237V6.40016H10.4761V5.3335ZM12.5713 5.3335H13.619V6.40016H12.5713V5.3335ZM12.5713 7.46683H13.619V8.5335H12.5713V7.46683ZM12.5713 9.60016H13.619V10.6668H12.5713V9.60016ZM8.38086 9.60016H9.42848V10.6668H8.38086V9.60016ZM8.38086 7.46683H9.42848V8.5335H8.38086V7.46683ZM8.38086 5.3335H9.42848V6.40016H8.38086V5.3335Z"
              clipRule="evenodd"
            />
          </g>
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

export default SquareCroatia;
