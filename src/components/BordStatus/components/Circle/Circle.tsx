import React from "react";
import type { FC } from "react";
import { STATUS_VARIANTS, statusVariants } from "../../BordStatus.type";
import "../Circle/Circle.scss";

interface ICircleProps {
  variant?: statusVariants;
}

const Circle: FC<ICircleProps> = ({ variant = "default" }) => {
  const renderVariants = {
    [STATUS_VARIANTS.default]: "bg-disabled-fg-primary",
    [STATUS_VARIANTS.informative]: "bg-informative-bg-primary",
    [STATUS_VARIANTS.success]: "bg-success",
    [STATUS_VARIANTS.danger]: "bg-danger",
  };
  return <div className={`circleContainer ${renderVariants[variant]}`}></div>;
};

export default Circle;
