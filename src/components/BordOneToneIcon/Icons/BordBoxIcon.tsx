import { ComponentProps } from "react";
import { bordColorTheme } from "../../../styles/constants";

const BordBoxIcon = (props: ComponentProps<"svg">) => {
  const { stroke } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke={stroke ||  bordColorTheme.navyBlue[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3.27 6.9599 8.73 5.05 8.73-5.05M12 22.0799v-10.08m9 4v-8c-.0004-.35072-.0929-.69519-.2685-.99884-.1755-.30364-.4278-.5558-.7315-.73116l-7-4c-.304-.17553-.6489-.26795-1-.26795-.3511 0-.696.09242-1 .26795l-7 4c-.30374.17536-.55602.42752-.73154.73116-.17552.30365-.2681.64812-.26846.99884v8c.00036.3507.09294.6952.26846.9988.17552.3037.4278.5558.73154.7312l7 4c.304.1755.6489.268 1 .268.3511 0 .696-.0925 1-.268l7-4c.3037-.1754.556-.4275.7315-.7312.1756-.3036.2681-.6481.2685-.9988Z"
      />
    </svg>
  );
};

export default BordBoxIcon;
