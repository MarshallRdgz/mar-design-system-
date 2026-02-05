import React from 'react';
import BordGenericSelect from '../BordGenericSelect/BordGenericSelect';
import BordCheckBox from '../BordCheckBox/BordCheckBox';
import { IBordFiltersExpandableSelect } from './BordFiltersExpandableSelect.types';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import './BordFiltersExpandableSelect.scss';

const BordFiltersExpandableSelect = ({
  filterTitle,
  openSelectStatus,
  openSelectFunction,
  rawSelectOptions,
  handleChangeSelectedOption,
  isFilterActive,
}: IBordFiltersExpandableSelect) => {
  const classnames = `moduleFilterExpandableSelect ${isFilterActive ? 'active' : ''}`;

  const changeOpenStatusFunction = () => openSelectFunction(!openSelectStatus);

  const formSelectOptionsUI = () => {
    return rawSelectOptions.reduce<JSX.Element[]>((prev, option, i) => {
      if (option?.name?.length <= 0) return prev;

      const handleClickOption = () => handleChangeSelectedOption(option);
      const newOption = (
        <div key={`${filterTitle}Option${i}`} className="optionContainer" onClick={handleClickOption}>
          <BordCheckBox label={''} isButtonActive={option?.isActive} />
          <div className="optionText">
            {typeof option?.icon === 'string' && <img src={option?.icon} alt="option icon" />}
            {typeof option?.icon !== 'string' && React.isValidElement(option?.icon) && option?.icon}
            {option.name}
          </div>
        </div>
      );
      const newOptions: JSX.Element[] = [...prev, newOption];
      return newOptions;
    }, []);
  };

  return (
    <div className={classnames} onClick={changeOpenStatusFunction}>
      <div className="closedSelect">{filterTitle}</div>
      {!openSelectStatus && (
        <div className="arrowIcon">
          <BordOneToneIcon variant="arrowHeadDown" customWidth="1.2rem" />
        </div>
      )}
      {openSelectStatus && (
        <div className="arrowIcon">
          <BordOneToneIcon variant="arrowHeadUp" customWidth="1.2rem" />
        </div>
      )}
      {openSelectStatus && (
        <BordGenericSelect
          selectOptions={formSelectOptionsUI()}
          changeSelectedOption={handleChangeSelectedOption}
          changeOpenStatusFunction={changeOpenStatusFunction}
          defaultValue=""
        />
      )}
    </div>
  );
};

export default BordFiltersExpandableSelect;
