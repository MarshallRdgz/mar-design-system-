import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordUploadCloudIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m16.0004 16-4-4m0 0-3.99995 4m3.99995-4v9m8.39-2.61c.9754-.5317 1.7459-1.3731 2.1899-2.3914.4441-1.0182.5364-2.1554.2624-3.2319-.2741-1.0766-.8988-2.0312-1.7756-2.7133-.8768-.68203-1.9558-1.05268-3.0667-1.05342h-1.26c-.3026-1.17075-.8668-2.25766-1.65-3.179-.7832-.92134-1.7651-1.65315-2.8719-2.14039-1.1067-.48724-2.3095-.71725-3.51793-.67272-1.20844.04452-2.39105.36241-3.45894.92978-1.06789.56736-1.99327 1.36944-2.70656 2.34592-.71329.97647-1.19593 2.10195-1.41164 3.29181-.215712 1.18982-.158876 2.41312.16623 3.57782.32511 1.1648.91003 2.2406 1.71079 3.1468"
      />
    </svg>
  );
};

export default BordUploadCloudIcon;
