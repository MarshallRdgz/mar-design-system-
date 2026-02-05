import type { FC } from "react";
import { IBordGlassProps } from "./BordGlass.types";
import "../BordGlass/BordGlass.scss";

const BordGlass: FC<IBordGlassProps> = ({
  children,
  customClassName = "bordGlassContainer",
}) => {
  return <div className={`${customClassName} backdrop-blur`}>{children}</div>;
};

export default BordGlass;
