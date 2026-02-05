import { IBordButton } from '../BordButton/BordButton.types';
import { IBordIlustrationIconProps } from '../BordIlustrationIcon/BordIlustration.types';
import { IbordOneToneIconProps } from '../BordOneToneIcon/BordOneToneIcon';
import { IBordTwoToneIconProps } from '../BordTwoToneIcon/BordTwoToneIcon.types';
export interface IBordEmptyStateProps {
    title: string;
    subTitle?: string;
    ilustrationIconProps?: IBordIlustrationIconProps;
    twoToneIconProps?: IBordTwoToneIconProps;
    oneToneIconProps?: IbordOneToneIconProps;
    buttonOneProps?: IBordButton;
    buttonTwoProps?: IBordButton;
    customClassNameSubTitle?: string;
}
