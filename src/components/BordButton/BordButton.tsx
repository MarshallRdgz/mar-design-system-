import * as React from 'react';
import { IBordButton } from './BordButton.types';
// ✅ Corregido: Importación con llaves (asumiendo que también lo cambiaste a named export)
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import './BordButton.scss';

/**
 * @description A button component with different styles and loading state.
 * ... (tus JSDocs se mantienen igual)
 */

// ✅ Cambio 1: Agregamos 'export' antes de la const
export const BordButton = (props: IBordButton): React.ReactElement => {
  const {
    formId,
    customWidth,
    bordButtonStyle,
    onClick,
    disabled,
    customClassName = '',
    customFontSize,
    buttonIconOne,
    buttonIconTwo,
    isLoading,
    label = 'Button Text',
    customHeight = 'auto',
    modeButton = 'primary',
  } = props;

  const customHeightStyle = customHeight !== 'auto' ? `ht-${customHeight}` : '';
  const buttonOutlineStyle = bordButtonStyle === 'outlined' && 'bordButtonOutlined';
  const skeletonLoaderClassnames = `bordButtonSkeletonLoader animationLoader ${customWidth} ${customHeightStyle} `;
  const styleModeButton = modeButton;

  if (isLoading) return <div className={skeletonLoaderClassnames} />;

  return (
    <button
      className={`bordButton ${customClassName} ${buttonOutlineStyle} ${customWidth} ${customHeightStyle} ${styleModeButton}`}
      form={formId}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonIconOne && (
        <div className="iconContainer">
          <BordOneToneIcon variant={buttonIconOne} stroke="white" />
        </div>
      )}
      {label && (
        <div className={`textContainer`} style={{ fontSize: customFontSize }}>
          {label}
        </div>
      )}
      {buttonIconTwo && (
        <div className="iconContainer">
          <BordOneToneIcon variant={buttonIconTwo} stroke="white" />
        </div>
      )}
    </button>
  );
};

// ✅ Cambio 2: BORRAMOS el 'export default BordButton' de aquí abajo
