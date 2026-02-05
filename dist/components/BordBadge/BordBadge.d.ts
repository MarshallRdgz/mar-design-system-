import { FC } from "react";
import "../BordBadge/BordBadge.scss";
export interface IBordBadgeProps {
    label: string;
    variant?: "default" | "gradient";
}
declare const BordBadge: FC<IBordBadgeProps>;
export default BordBadge;
