import { ImentionableUser } from '../MentionableUser/MentionableUser';
import './MentionableUsersList.scss';
declare const MentionableUsersList: ({ users, hideOptionsCallback, handleSelectUser, search, ...rest }: IMentionableUsersListProps) => import("react/jsx-runtime").JSX.Element;
export default MentionableUsersList;
export interface IMentionableUsersListProps extends React.HTMLAttributes<HTMLDivElement> {
    users: ImentionableUser[];
    hideOptionsCallback: () => void;
    handleSelectUser: (user: ImentionableUser) => void;
    search: string;
}
