import type { FC } from "react";
import { statusVariants } from "./BordStatus.type";
import "../BordStatus/BordStatus.scss";
interface IBordStatusProps {
    label: string;
    variant?: statusVariants;
}
declare const BordStatus: FC<IBordStatusProps>;
export default BordStatus;
