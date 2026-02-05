import { JSX } from "react";
import { TformComponentsStandardSizes } from "../../types/global.types";
export interface IBordModalProps {
    modalContent: JSX.Element;
    closesOnClickOutside?: boolean;
    closeModalCallback?: () => void;
    clickOutsideCallback?: () => void;
    shouldCloseModal?: boolean;
    customZIndex?: number;
}
export interface InudosModalContent {
    CustomModalComponent?: JSX.Element;
    toCloseModal?: TfunctionOneToVoid;
    modalContentTitle?: string;
    customWidth?: string;
    customHeight?: string;
    customHeaderClass?: string;
    closeIconColor?: string;
    excludeHeader?: boolean;
    leftAlignmentTitle?: boolean;
    title?: string;
    subTitle?: string;
    showButtonOne?: boolean;
    showButtonTwo?: boolean;
    onClickButtonOne?: () => void;
    onClickButtonTwo?: () => void;
    textButtonOne?: string;
    textButtonTwo?: string;
    sizeButtonOne?: TformComponentsStandardSizes;
    sizeButtonTwo?: TformComponentsStandardSizes;
    modalSize?: "sm" | "md" | "lg";
}
export type TfunctionOneToVoid = () => void;
