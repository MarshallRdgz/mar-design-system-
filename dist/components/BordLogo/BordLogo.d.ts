import { IBordLogoProps } from "./BordLogo.types";
/**
 * BordLogo component
 *
 * @example
 * <BordLogo />
 *
 * @param {Object} props Component props
 * @param {number} [props.standardSize=48] Standard logo size in pixels
 * @param {string} [props.customWidth] Custom logo width
 * @param {string} [props.colorLetters=#fff] Color of the letters
 * @param {string} [props.colorDot=#FF6175] Color of the dot
 */
declare const BordLogo: ({ standardSize, customWidth, colorLetters, colorDot, }: IBordLogoProps) => import("react/jsx-runtime").JSX.Element;
export default BordLogo;
