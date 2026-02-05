import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordAlertTriangleWarningIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke || bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.9998 8.99996V13m0 4h.01m-1.72-13.14004L1.81978 18c-.17464.3024-.26704.6453-.26801.9945-.00098.3492.0895.6926.26243.996.17294.3034.4223.5562.72328.7333.30099.1771.6431.2723.9923.2762H20.4698c.3492-.0039.6913-.0991.9923-.2762.301-.1771.5503-.4299.7233-.7333.1729-.3034.2634-.6468.2624-.996-.001-.3492-.0934-.6921-.268-.9945l-8.47-14.14004c-.1783-.29389-.4293-.53688-.7288-.70552-.2996-.16863-.6375-.25722-.9812-.25722-.3438 0-.6817.08859-.9812.25722-.2995.16864-.5506.41163-.7288.70552Z"
      />
    </svg>
  );
};

export default BordAlertTriangleWarningIcon;
