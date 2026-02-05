import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordDownloadCloudIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8.00018 16.9999 4.00002 4m0 0 4-4m-4 4v-9m8.88 6.09c.8694-.6113 1.5213-1.4838 1.8613-2.4908.3399-1.007.3501-2.0961.0291-3.1093-.321-1.0132-.9566-1.8978-1.8144-2.52531-.8577-.62752-1.8932-.96539-2.956-.96456h-1.26c-.3008-1.17212-.8635-2.26075-1.6459-3.18392-.7824-.92316-1.764-1.65682-2.8709-2.14572-1.107-.48891-2.31038-.72033-3.5197-.67684-1.20931.04349-2.39301.36075-3.46197.92791-1.06896.56715-1.99533 1.36942-2.70937 2.3464-.71403.97698-1.19713 2.10322-1.41292 3.29392-.215793 1.19072-.158653 2.41482.16712 3.58032.32577 1.1654.91168 2.2417 1.71362 3.1479"
      />
    </svg>
  );
};

export default BordDownloadCloudIcon;
