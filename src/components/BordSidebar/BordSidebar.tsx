import { IbordSidebarProps } from "./BordSidebar.types";
import SidebarLogo from "./components/SidebarLogo/SidebarLogo";
import SidebarModulesList from "./components/SidebarModulesList/SidebarModulesList";
import "./BordSidebar.scss";

const BordSidebar = ({
  isOpen,
  sidebarBaseModules,
  sidebarAdditionalModules,
  logoProps,
}: IbordSidebarProps) => {
  const openStyles = isOpen ? "open" : "";
  const classnames = `bordSidebar ${openStyles}`;

  return (
    <div className={classnames}>
      <SidebarLogo isOpen={isOpen} {...logoProps} />
      <SidebarModulesList
        isOpen={isOpen}
        className="baseModules"
        modulesList={sidebarBaseModules}
      />
      <div className="divider" />
      <SidebarModulesList
        isOpen={isOpen}
        className="additionalModules"
        modulesList={sidebarAdditionalModules}
      />
    </div>
  );
};

export default BordSidebar;
