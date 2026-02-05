import BordLogo from "../../../BordLogo/BordLogo";
import BordOneToneIcon from "../../../BordOneToneIcon/BordOneToneIcon";
import { IsidebarLogoProps } from "../../BordSidebar.types";
import "./SidebarLogo.scss";

const SidebarLogo = ({ isOpen, ...rest }: IsidebarLogoProps) => {
  return (
    <div className="sidebarLogo" {...rest}>
      {isOpen && <BordLogo standardSize={80} />}
      {!isOpen && <BordOneToneIcon variant="bord" stroke="white" />}
    </div>
  );
};

export default SidebarLogo;
