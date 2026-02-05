import { bordColorTheme } from '../../styles/constants';
import BordOneToneIcon from '../BordOneToneIcon/BordOneToneIcon';
import './BordToolModelMarker.scss';

const BordToolModelMarker = ({
  isBordTool,
  customSize,
}: IbordToolModelMarkerProps) => {
  const bordToolStyles = isBordTool ? 'bordTool' : '';
  const classnames = `bordToolModelMarker ${bordToolStyles}`;

  const bordIconColor = isBordTool
    ? bordColorTheme.cyan[300]
    : bordColorTheme.disabled.fgSecondary;

  const componentSize = customSize || 3.2;
  const size = `${componentSize}rem`;
  const iconWidth = `${(componentSize * 0.56).toFixed(2)}rem`;
  const innerCircleSize = `${(componentSize * 0.93).toFixed(2)}rem`;
  const innerCircleDisplacement = `${(componentSize * 0.032).toFixed(2)}rem`;

  const innerCircleStyles = {
    width: innerCircleSize,
    height: innerCircleSize,
    left: innerCircleDisplacement,
    top: innerCircleDisplacement,
  };

  return (
    <div className={classnames} style={{ width: size, height: size }}>
      <div className="innerCircle" style={innerCircleStyles}>
        <BordOneToneIcon
          variant="logoMaster"
          customWidth={iconWidth}
          fill={bordIconColor}
        />
      </div>
    </div>
  );
};

export default BordToolModelMarker;

export interface IbordToolModelMarkerProps{
  isBordTool: boolean;
  customSize?: number;
}