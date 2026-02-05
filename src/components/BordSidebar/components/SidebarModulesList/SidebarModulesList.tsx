import BordSidebarButton from "../../../BordSidebarButton/BordSidebarButton";
import { IbordSidebarModulesList } from "../../BordSidebar.types";
import "./SidebarModulesList.scss";

const SidebarModulesList = ({
  isOpen,
  modulesList,
  className = "",
}: IbordSidebarModulesList) => {
  const classnames = `sidebarModulesList ${className}`;
  return (
    <div className={classnames}>
      {modulesList.map(sidebarModule => {
        const { isSelected, buttonText, buttonIcon, onClick } = sidebarModule;
        return (
          <BordSidebarButton
            key={`${buttonText}`}
            isSelected={isSelected}
            isOpen={isOpen}
            buttonText={buttonText}
            buttonIcon={buttonIcon}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default SidebarModulesList;
