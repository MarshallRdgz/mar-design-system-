import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordGithubIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 18.9999c-5 1.5-5-2.5-7-3m14 6v-3.87c.0375-.4768-.0269-.9562-.189-1.4062-.1621-.45-.4181-.8603-.751-1.2038 3.14-.35 6.44-1.54 6.44-6.99996-.0003-1.39618-.5373-2.7388-1.5-3.75.4559-1.2215.4236-2.57165-.09-3.770002 0 0-1.18-.35-3.91 1.480002-2.292-.62118-4.708-.62118-7 0C6.27.649938 5.09.999938 5.09.999938 4.57638 2.19829 4.54414 3.54844 5 4.76994c-.96987 1.0187-1.50748 2.37346-1.5 3.78 0 5.41996 3.3 6.60996 6.44 6.99996-.329.34-.58274.7454-.74469 1.19-.16196.4445-.2285.9181-.19531 1.39v3.87"
      />
    </svg>
  );
};

export default BordGithubIcon;
