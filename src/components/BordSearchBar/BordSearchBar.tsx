import React, { FC, useEffect, useState } from 'react';
import { IBordSearchBar } from './BordSearchBar.types';
import useDebounce from '../../hooks/useDebounce';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import './BordSearchBar.scss';

const BordSearchBar: FC<IBordSearchBar> = ({
  handleChange,
  customClassName,
  placeholder,
  hasDeleteButton,
  label,
  isDeactivated,
  isFilled,
  includeMagnifierIcon = true,
  includeDropdownArrowIcon = false,
  customIcon,
  handleBlur,
  defaultValue,
  customInputClass,
  customSearchBarContainer,
  standardSize,
  loading,
}: IBordSearchBar) => {
  const [currentText, setCurrentText] = useState('');
  const customWidth = standardSize ? standardSize : 'w-full';
  const filledStyles = (isFilled || (currentText && currentText.length > 0)) && !isDeactivated ? 'filled' : '';
  const deactivatedStyles = isDeactivated ? 'deactivated' : '';
  const classNameStyles = customClassName ? customClassName : '';
  const deleteButtonStyles = hasDeleteButton ? 'deleteButtonStyles' : '';
  const classnames = `bordSearchBar  ${
    customWidth ? customWidth : ''
  } ${filledStyles} ${deactivatedStyles}  ${classNameStyles} ${deleteButtonStyles}`;

  const handleInputChange = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    if (value) setCurrentText(value);
    if (!value) {
      setCurrentText('');
      handleChange('');
    }
  };
  const debouncedText = useDebounce(currentText, 300);
  const handleClickDelete = () => {
    setCurrentText('');
    handleChange('');
  };

  const includeRightSide = (hasDeleteButton && !!currentText) || includeDropdownArrowIcon;

  useEffect(() => {
    if (debouncedText === defaultValue) return;
    if (typeof debouncedText === 'string' && handleChange) {
      handleChange(debouncedText);
    }
  }, [debouncedText]);

  useEffect(() => {
    if (typeof defaultValue === 'string') setCurrentText(defaultValue);
  }, [defaultValue]);

  if (loading) {
    return (
      <div className={classnames}>
        {label && (
          <div className="bordSearchBarLabel">
            <div className="loaderLabel animationLoader" />
          </div>
        )}
        <div className={`searchBarContainerSkeletor animationLoader `} />
      </div>
    );
  }

  return (
    <div className={classnames}>
      {label && <div className="bordSearchBarLabel">{label}</div>}
      <div className={`searchBarContainer ${customSearchBarContainer || ''}`}>
        {(includeMagnifierIcon || customIcon) && (
          <div className="magnifierIconContainer">
            {includeMagnifierIcon && !customIcon && (
              <BordOneToneIcon variant="search" className="magnifierIcon" standardSize={14} />
            )}
            {customIcon || null}
          </div>
        )}
        <div className="inputContainer">
          <input
            className={customInputClass || ''}
            value={currentText}
            placeholder={placeholder}
            readOnly={isDeactivated}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
          />
        </div>
        {includeRightSide && (
          <div className="right">
            {hasDeleteButton && currentText && (
              <div className="deleteIconContainer" onClick={handleClickDelete}>
                <BordOneToneIcon className="deleteIcon" variant="xSquare" standardSize={14} />
              </div>
            )}
            {includeDropdownArrowIcon && (
              <BordOneToneIcon variant="arrowHeadUp" className="IconDropdownArrow contractArrow" standardSize={14} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BordSearchBar;
