import type { FC } from "react";
import { statusVariants } from "../../BordStatus.type";
import "../Circle/Circle.scss";
interface ICircleProps {
    variant?: statusVariants;
}
declare const Circle: FC<ICircleProps>;
export default Circle;
