import { ComponentProps } from 'react';
import { IbordOneToneIconProps } from '../BordOneToneIcon/BordOneToneIcon';
import './BordTextButton.scss';
/**
 * @property { string } text - The text to show in the link like button
 * @property { string } customClassname - A classname for custom styles
 * @property {  IbordOneToneIconProps }  leftIconProps - The props of the left icon.
 * @property { IbordOneToneIconProps }  rightIconProps - The props of the right icon.
 * @property { boolean  } isDisabled - A boolean indicating if the button is disabled
 * @property { JSX.Element } explainingHover - A jsx element to display when the button is hovered, as to be used in the explaination of its action or state
 */
declare const BordTextButton: ({ text, isDisabled, explainingHover, onClick, className: customClassName, leftIconProps, rightIconProps, textProps, }: IbordTextButton) => import("react/jsx-runtime").JSX.Element;
export default BordTextButton;
export interface IbordTextButton extends ComponentProps<'div'> {
    text: string;
    isDisabled?: boolean;
    explainingHover?: JSX.Element;
    leftIconProps?: IbordOneToneIconProps;
    rightIconProps?: IbordOneToneIconProps;
    textProps?: ComponentProps<'div'>;
}
