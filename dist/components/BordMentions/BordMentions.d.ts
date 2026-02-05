import React from 'react';
import { ImentionableUser } from './MentionableUser/MentionableUser';
import './BordMentions.scss';
declare const BordMentions: ({ placeholder, style, userList, userListProps, updateMessageCallback, updateMentionedUsersCallback, }: IBordMentionsProps) => import("react/jsx-runtime").JSX.Element;
export default BordMentions;
export interface IBordMentionsProps {
    placeholder: string;
    style?: React.CSSProperties;
    userList?: ImentionableUser[];
    userListProps?: React.HTMLAttributes<HTMLDivElement>;
    updateMessageCallback?: (message: string) => void;
    updateMentionedUsersCallback?: (mentionedUsers: ImentionableUser[]) => void;
}
