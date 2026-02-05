import React, { FC } from "react";
import "../BordBadge/BordBadge.scss";

export interface IBordBadgeProps {
  label: string;
  variant?: "default" | "gradient";
}

enum BADGE_VARIANTS {
  default = "default",
  gradient = "gradient",
}

const BordBadge: FC<IBordBadgeProps> = ({
  label = "Label",
  variant = "default",
}) => {
  const renderVariants = {
    [BADGE_VARIANTS.default]: {
      styles: "defaultStyles",
      component: <span>{label}</span>,
    },
    [BADGE_VARIANTS.gradient]: {
      styles: "gradientStyles",
      component: (
        <div className="gradientComponentStyles">
          <span>{label}</span>
        </div>
      ),
    },
  };
  return (
    <div className={`badgeContainer ${renderVariants[variant]?.styles}`}>
      {renderVariants[variant]?.component}
    </div>
  );
};

export default BordBadge;
