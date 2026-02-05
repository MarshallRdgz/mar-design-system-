import { ComponentProps } from "react";
import { IbordSidebarButtonProps } from "../BordSidebarButton/BordSidebarButton.types";

export interface IbordSidebarProps extends ComponentProps<"div"> {
  isOpen: boolean;
  sidebarBaseModules: IbordSidebarButtonProps[];
  sidebarAdditionalModules: IbordSidebarButtonProps[];
  logoProps: ComponentProps<"div">;
}

export interface IbordSidebarModulesList extends ComponentProps<"div"> {
  isOpen: boolean;
  modulesList: IbordSidebarButtonProps[];
}

export interface IsidebarLogoProps extends ComponentProps<"div"> {
  isOpen: boolean;
}
