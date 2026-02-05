import React from "react";
import { TbordOneToneIcon } from "../BordOneToneIcon/BordOneToneIcon.types";
export interface IBordActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: TbordOneToneIcon;
    subTitle: string;
    title: string;
}
