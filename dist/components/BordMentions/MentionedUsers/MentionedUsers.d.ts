import { ImentionableUser } from '../MentionableUser/MentionableUser';
import './MentionedUsers.scss';
declare const MentionedUsers: ({ mentionedUsers, handleRemoveUser }: IMentionedUsersProps) => import("react/jsx-runtime").JSX.Element;
export default MentionedUsers;
export interface IMentionedUsersProps {
    mentionedUsers: ImentionableUser[];
    handleRemoveUser: (user: ImentionableUser) => void;
}
