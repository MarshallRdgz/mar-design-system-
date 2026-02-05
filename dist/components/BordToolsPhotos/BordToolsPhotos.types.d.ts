export type TBordToolsPhotosSize = "h-100" | "h-80" | "h-64" | "h-56" | "h-32";
export interface IBordToolsPhotosProps {
    url?: string;
    size?: TBordToolsPhotosSize;
    customSize?: string;
    variant?: "rounded" | "square";
}
