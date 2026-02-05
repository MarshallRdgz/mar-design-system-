import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordInboxIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 12h-6l-2 3h-4l-2-3H2m20 0v6c0 .5304-.2107 1.0391-.5858 1.4142S20.5304 20 20 20H4c-.53043 0-1.03914-.2107-1.41421-.5858C2.21071 19.0391 2 18.5304 2 18v-6m20 0-3.45-6.89c-.1656-.33321-.4208-.61363-.737-.80972-.3163-.19609-.6809-.30008-1.053-.30028H7.24c-.37208.0002-.73674.10419-1.05296.30028-.31621.19609-.57146.47651-.73704.80972L2 12"
      />
    </svg>
  );
};

export default BordInboxIcon;
