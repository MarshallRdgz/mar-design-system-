import MentionableUser, { ImentionableUser } from '../MentionableUser/MentionableUser';
import './MentionableUsersList.scss';

const MentionableUsersList = ({
  users,
  hideOptionsCallback,
  handleSelectUser,
  search,
  ...rest
}: IMentionableUsersListProps) => {
  return (
    <div className="mentionableUsersList" {...rest}>
      {search && <div className="mentionableUsersListSearch">Buscando: {search}</div>}
      {users.map(user => (
        <MentionableUser
          key={user.userId}
          user={user}
          handleSelectUser={handleSelectUser}
          hideOptionsCallback={hideOptionsCallback}
        />
      ))}
    </div>
  );
};

export default MentionableUsersList;

export interface IMentionableUsersListProps extends React.HTMLAttributes<HTMLDivElement> {
  users: ImentionableUser[];
  hideOptionsCallback: () => void;
  handleSelectUser: (user: ImentionableUser) => void;
  search: string;
}
