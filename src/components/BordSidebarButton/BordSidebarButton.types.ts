import { ComponentProps } from "react";
import { TbordTwoToneIcon } from "../BordTwoToneIcon/BordTwoToneIcon.types";

export interface IbordSidebarButtonProps extends ComponentProps<"button"> {
  isSelected?: boolean;
  isOpen?: boolean;
  buttonText?: string;
  buttonIcon?: TbordTwoToneIcon;
}
