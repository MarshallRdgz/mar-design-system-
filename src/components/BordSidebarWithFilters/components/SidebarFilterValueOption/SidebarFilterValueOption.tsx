import BordCheckBox from '../../../BordCheckBox/BordCheckBox';
import { IsidebarFilterValue } from '../../BordSidebarWithFilters.types';
import './SidebarFilterValueOption.scss';

const SidebarFilterValueOption = ({
  filterValue,
  clickOptionCallback,
}: {
  filterValue: IsidebarFilterValue;
  clickOptionCallback: (value: string | number, label: string) => void; // eslint-disable-line no-unused-vars
}) => {
  const { label, value, isSelected = false, isDisabled = false } = filterValue || {};

  const clickOption = () => clickOptionCallback(value, label);

  return (
    <div className="sidebarFilterValueOption">
      <BordCheckBox
        label={label}
        isButtonActive={isSelected}
        isButtonDisabled={isDisabled}
        handleClickButton={clickOption}
      />
    </div>
  );
};

export default SidebarFilterValueOption;
