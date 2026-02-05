import type { FC } from "react";
import { IBordToolsPhotosProps } from "./BordToolsPhotos.types";
import "./BordToolsPhotos.scss";

const BordToolsPhotos: FC<IBordToolsPhotosProps> = ({
  url,
  size,
  customSize,
  variant = "square",
}) => {
  const renderSize = customSize ? customSize : size;
  return (
    <img className={`bordToolsPhotos ${renderSize} ${variant}`} src={url} />
  );
};

export default BordToolsPhotos;
