import { ComponentProps } from 'react';
import { bordColorTheme } from '../../styles/constants';
import BordOneToneIcon, { IbordOneToneIconProps } from '../BordOneToneIcon/BordOneToneIcon';
import './BordTextButton.scss';

/**
 * @property { string } text - The text to show in the link like button
 * @property { string } customClassname - A classname for custom styles
 * @property {  IbordOneToneIconProps }  leftIconProps - The props of the left icon.
 * @property { IbordOneToneIconProps }  rightIconProps - The props of the right icon.
 * @property { boolean  } isDisabled - A boolean indicating if the button is disabled
 * @property { JSX.Element } explainingHover - A jsx element to display when the button is hovered, as to be used in the explaination of its action or state
 */
const BordTextButton = ({
  text,
  isDisabled,
  explainingHover,
  onClick,
  className: customClassName = '',
  leftIconProps,
  rightIconProps,
  textProps,
}: IbordTextButton) => {
  const disabledStyles = isDisabled ? 'disabled' : '';
  const classnames = `bordTextButton ${disabledStyles} ${customClassName}`;
  const onClickCallback = isDisabled ? undefined : onClick;
  const defaultStroke = isDisabled ? bordColorTheme.disabled.bgPrimary : bordColorTheme.primary.bgDefault;
  const leftIconStroke = leftIconProps?.stroke || defaultStroke;
  const rightIconStroke = rightIconProps?.stroke || defaultStroke;

  return (
    <div className={classnames} onClick={onClickCallback}>
      {leftIconProps && <BordOneToneIcon {...{ ...leftIconProps, stroke: leftIconStroke }} />}
      <div className="text" {...textProps}>
        {text}
      </div>
      {rightIconProps && <BordOneToneIcon {...{ ...rightIconProps, stroke: rightIconStroke }} />}
      {explainingHover && <div className="hoverElementContainer">{explainingHover}</div>}
    </div>
  );
};

export default BordTextButton;

export interface IbordTextButton extends ComponentProps<'div'> {
  text: string;
  isDisabled?: boolean;
  explainingHover?: JSX.Element;
  leftIconProps?: IbordOneToneIconProps;
  rightIconProps?: IbordOneToneIconProps;
  textProps?: ComponentProps<'div'>;
}
