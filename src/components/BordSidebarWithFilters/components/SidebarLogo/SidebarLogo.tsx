import BordLogo from '../../../BordLogo/BordLogo';
import { IsidebarLogoProps } from '../../../BordSidebar/BordSidebar.types';
import './SidebarLogo.scss';

const SidebarLogo = (props: IsidebarLogoProps) => {
  return (
    <div className="sidebarLogo" {...props}>
      <BordLogo standardSize={80} />
    </div>
  );
};

export default SidebarLogo;
