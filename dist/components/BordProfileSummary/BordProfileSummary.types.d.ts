import { TbordAvatarsVariant } from "../BordAvatar/BordAvatar.types";
export interface IBordProfileSummaryProps {
    title?: string | JSX.Element;
    subTitle?: string | JSX.Element;
    variant?: TbordAvatarsVariant;
    imgUrl?: string;
}
