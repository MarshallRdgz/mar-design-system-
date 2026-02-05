import { ComponentProps } from 'react';

const BordRectangularMascotAvatar = (props: ComponentProps<'svg'>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
      <rect width="47" height="47" x=".5" y=".5" fill="#052143" rx="7.5" />
      <rect width="47" height="47" x=".5" y=".5" stroke="#626C82" rx="7.5" />
      <path
        fill="url(#a)"
        d="M32.441 11.3334h-8.5364c-2.5547 0-4.8968.9058-6.7234 2.4134-2.3496 1.9392-3.8472 4.8731-3.8472 8.1572 0 2.5548.9058 4.8969 2.4134 6.7235.4304.5217.9108 1.0022 1.4325 1.4325 1.8279 1.5076 4.17 2.4134 6.7235 2.4134 3.2842 0 6.218-1.4975 8.1572-3.8471 1.5076-1.8279 2.4134-4.17 2.4134-6.7235v-8.5351c0-1.1235-.9108-2.0343-2.0355-2.0343h.0025Z"
      />
      <ellipse
        cx="22.0258"
        cy="19.3725"
        fill="#1B202F"
        rx="1.3071"
        ry="2.61419"
      />
      <ellipse
        cx="25.9477"
        cy="19.6993"
        fill="#1B202F"
        rx="1.3071"
        ry="2.28742"
      />
      <ellipse
        cx="18.4322"
        cy="23.6206"
        fill="#1B202F"
        rx=".326775"
        ry=".326774"
      />
      <ellipse
        cx="23.9882"
        cy="29.8293"
        fill="#1B202F"
        rx="5.22839"
        ry="1.3071"
      />
      <path
        fill="#22CFAB"
        stroke="#1B202F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.6298 36.6651c.2602.0327.5015-.1413.5527-.3986l1.1207-5.6365c.0502-.252-.0989-.501-.3448-.5758l-2.5407-.7734c-.1484-.0451-.3093-.0189-.4357.0711-.1263.09-.2037.2335-.2096.3885l-.118 3.1494c-1.5043-.2-2.4912.0506-3.0225.6849-.5925.7073-.413 1.6424-.1733 2.1941.0704.162.221.2748.3963.2968l4.7749.5995Z"
      />
      <path
        fill="#22CFAB"
        stroke="#1B202F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26.155 36.8886c-.2571.052-.5106-.1035-.5809-.3563l-1.5382-5.5371c-.0688-.2476.0613-.507.3008-.5999l2.476-.9609c.1446-.0561.3071-.0419.4398.0384.1327.0803.2206.2177.2379.3718l.3528 3.1318c1.4852-.3118 2.488-.1355 3.0652.4574.6436.6611.5344 1.607.3365 2.175-.0581.1668-.1999.2906-.373.3256l-4.7169.9542Z"
      />
      <path
        stroke="#1B202F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.9312 25.4704c.7157.3237 2.7706.7358 5.2651-.2049 2.4944-.9408 3.6213-2.142 3.8729-2.6251"
      />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(112.011 9.37516225 18.6505761) scale(16.7453)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".665" stopColor="#22CFAB" />
          <stop offset="1" stopColor="#1AA185" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BordRectangularMascotAvatar;
