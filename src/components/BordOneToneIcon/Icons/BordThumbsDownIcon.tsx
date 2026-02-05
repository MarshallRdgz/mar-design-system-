import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordThumbsDownIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 13.0001-4 9c-.7956 0-1.5587-.3161-2.1213-.8787-.5626-.5626-.8787-1.3256-.8787-2.1213v-4H4.34003c-.28991.0033-.57706-.0565-.84157-.1752s-.50004-.2935-.69029-.5123c-.19024-.2188-.33064-.4763-.41148-.7547-.08083-.2785-.10017-.5711-.05666-.8578l1.38-8.99998c.07232-.47691.31457-.91161.68209-1.22401.36753-.3124.83558-.48145 1.31791-.47599H17m0 10.99998V2.00012m0 10.99998h2.67c.566.01 1.1159-.1881 1.5454-.5568.4296-.3687.7088-.8822.7846-1.4432V4.00012c-.0758-.56094-.355-1.0745-.7846-1.44318-.4295-.36869-.9794-.56683-1.5454-.55682H17"
      />
    </svg>
  );
};

export default BordThumbsDownIcon;
