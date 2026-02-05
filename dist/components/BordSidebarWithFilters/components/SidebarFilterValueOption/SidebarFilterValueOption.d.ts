import { IsidebarFilterValue } from '../../BordSidebarWithFilters.types';
import './SidebarFilterValueOption.scss';
declare const SidebarFilterValueOption: ({ filterValue, clickOptionCallback, }: {
    filterValue: IsidebarFilterValue;
    clickOptionCallback: (value: string | number, label: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default SidebarFilterValueOption;
