import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordPaperclipIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m21.4403 11.0499-9.19 9.19c-1.1259 1.1259-2.65283 1.7584-4.24501 1.7584s-3.11916-.6325-4.245-1.7584c-1.12584-1.1258-1.75834-2.6528-1.75834-4.245s.6325-3.1191 1.75834-4.245l9.19001-9.18998c.7506-.75056 1.7685-1.17222 2.83-1.17222 1.0614 0 2.0794.42166 2.83 1.17222.7506.75056 1.1722 1.76854 1.1722 2.83s-.4216 2.07944-1.1722 2.83L9.41029 17.4099c-.37528.3753-.88427.5861-1.415.5861s-1.03972-.2108-1.415-.5861c-.37528-.3753-.58611-.8843-.58611-1.415 0-.5307.21083-1.0397.58611-1.415l8.49001-8.47998"
      />
    </svg>
  );
};

export default BordPaperclipIcon;
