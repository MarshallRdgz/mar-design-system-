import React from "react";
import type { FC } from "react";
import Circle from "./components/Circle/Circle";
import { STATUS_VARIANTS, statusVariants } from "./BordStatus.type";
import "../BordStatus/BordStatus.scss";

interface IBordStatusProps {
  label: string;
  variant?: statusVariants;
}

const BordStatus: FC<IBordStatusProps> = ({
  variant = "default",
  label = "Label",
}) => {
  const renderVariants = {
    [STATUS_VARIANTS.default]: "border-disabled-fg-primary",
    [STATUS_VARIANTS.informative]: "border-informative-bg-primary",
    [STATUS_VARIANTS.success]: "border-success",
    [STATUS_VARIANTS.danger]: "border-danger",
  };
  return (
    <div className={`bordStatusContainer ${renderVariants[variant]}`}>
      <Circle variant={variant} />
      <span>{label}</span>
    </div>
  );
};

export default BordStatus;
