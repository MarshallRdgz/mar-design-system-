import './MentionableUser.scss';
declare const MentionableUser: ({ user, handleSelectUser, hideOptionsCallback }: ImentionableUserProps) => import("react/jsx-runtime").JSX.Element;
export default MentionableUser;
export interface ImentionableUser {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    photoUrl?: string;
}
export interface ImentionableUserProps {
    user: ImentionableUser;
    handleSelectUser?: (user: ImentionableUser) => void;
    hideOptionsCallback?: () => void;
}
