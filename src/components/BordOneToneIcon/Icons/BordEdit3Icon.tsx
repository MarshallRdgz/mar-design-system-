import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordEdit3Icon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 20h9M16.5 3.49998c.3978-.39782.9374-.62132 1.5-.62132.2786 0 .5544.05487.8118.16148.2574.1066.4912.26286.6882.45984.197.19699.3532.43084.4598.68821.1067.25737.1615.53322.1615.81179 0 .27858-.0548.55443-.1615.8118-.1066.25737-.2628.49122-.4598.6882L7 19l-4 1 1-4L16.5 3.49998Z"
      />
    </svg>
  );
};

export default BordEdit3Icon;
