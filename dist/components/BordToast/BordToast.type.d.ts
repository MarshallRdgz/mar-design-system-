export type toastVariants = "informative" | "success" | "warning" | "danger";
export declare enum TOAST_VARIANTS {
    "informative" = "info",
    "success" = "checkCircle",
    "warning" = "alertTriangleWarning",
    "danger" = "xCircle"
}
export interface IBordToastProps {
    variant?: toastVariants;
    title: string;
    description: string;
    onClose?: () => void;
    action?: () => void;
    hideAction?: boolean;
    actionLabel?: string;
    animationTime?: number;
    showAnimation?: boolean;
}
