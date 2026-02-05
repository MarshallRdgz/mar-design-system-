import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordYoutubeIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22.5396 6.42c-.1188-.47459-.3607-.90943-.7014-1.26059-.3406-.35117-.7679-.60623-1.2386-.73941-1.72-.42-8.6-.42-8.6-.42s-6.88 0-8.6.46c-.47076.13318-.89803.38824-1.23866.73941-.34063.35116-.58256.786-.70134 1.26059-.31479 1.74556-.468769 3.51631-.460005 5.29-.011221 1.787.142765 3.5713.460005 5.33.13095.4598.3783.8781.71814 1.2145.33984.3363.76068.5793 1.22186.7055 1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46c.4707-.1332.898-.3882 1.2386-.7394.3407-.3512.5826-.786.7014-1.2606.3124-1.7324.4663-3.4897.46-5.25.0112-1.78705-.1428-3.5713-.46-5.33Z"
      />
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m9.74959 15.02 5.75001-3.27-5.75001-3.27v6.54Z"
      />
    </svg>
  );
};

export default BordYoutubeIcon;
