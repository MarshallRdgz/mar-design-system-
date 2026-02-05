import { ReactNode } from "react";
import { TbordOneToneIcon } from "../BordOneToneIcon/BordOneToneIcon.types";
export declare enum CTA_TYPE {
    noCta = "noCta",
    oneCta = "oneCta",
    twoCta = "twoCta"
}
export interface IBordTooltipProps {
    message: string;
    position?: "top" | "bottom" | "left" | "right";
    children: ReactNode;
    ctaType?: "noCta" | "oneCta" | "twoCta";
    ctaLabel?: string;
    oneCtaVariant?: TbordOneToneIcon | undefined;
    ctaAction?: () => void;
    ctaButtonOneLabel?: string;
    ctaButtonOneAction?: () => void;
    ctaButtonTwoLabel?: string;
    ctaButtonTwoAction?: () => void;
}
