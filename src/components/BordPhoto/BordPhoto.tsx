import type { FC } from 'react';
import { IBordPhotoProps } from './BordPhoto.types';
import BordAvatar from '../BordAvatar/BordAvatar';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import BordFlag from '../BordFlag/BordFlag';
import BordToolModelMarker from '../BordToolModelMarker/BordToolModelMarker';
import './BordPhoto.scss';

const BordPhoto: FC<IBordPhotoProps> = ({
  url,
  size = 's100',
  variant = 'square',
  imageProps,
  avatarProps,
  oneToneIconProps,
  flagProps,
  toolModelMarkerProps,
  ...rest
}) => {
  const getPlaceholder = () => {
    const defaultValues = {
      placeholder: undefined,
      placeholderStyle: '',
    };
    if (url) return defaultValues;
    if (avatarProps) {
      return {
        placeholder: <BordAvatar {...avatarProps} />,
        placeholderStyle: 'avatarStyle',
      };
    }
    if (oneToneIconProps) {
      return {
        placeholder: <BordOneToneIcon {...oneToneIconProps} />,
        placeholderStyle: 'oneToneIconStyle',
      };
    }
    return defaultValues;
  };

  const getAdditionalData = () => {
    if (flagProps) {
      return {
        additionalDataComponent: <BordFlag {...flagProps} />,
        additionalDataStyles: 'additionalData',
      };
    }
    if (toolModelMarkerProps) {
      return {
        additionalDataComponent: <BordToolModelMarker {...toolModelMarkerProps} />,
        additionalDataStyles: 'additionalData',
      };
    }
    return {
      additionalDataComponent: undefined,
      additionalDataStyles: '',
    };
  };

  const { placeholder, placeholderStyle } = getPlaceholder();
  const { additionalDataComponent, additionalDataStyles } = getAdditionalData();

  const classnames = `bordPhoto ${size} ${variant} ${placeholderStyle} ${additionalDataStyles}`;

  return (
    <div className={classnames} {...rest}>
      {!!url && <img src={url} alt="Photo" {...imageProps} />}
      {!!placeholder && placeholder}
      {!!additionalDataComponent && additionalDataComponent}
    </div>
  );
};

export default BordPhoto;
