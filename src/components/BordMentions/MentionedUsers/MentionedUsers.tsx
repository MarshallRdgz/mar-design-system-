import BordOneToneIcon from '../../BordOneToneIcon/BordOneToneIcon';
import MentionableUser, { ImentionableUser } from '../MentionableUser/MentionableUser';
import './MentionedUsers.scss';

const MentionedUsers = ({ mentionedUsers, handleRemoveUser }: IMentionedUsersProps) => {
  return (
    <div className="mentionedUsers">
      {mentionedUsers.map((user, index) => (
        <div key={`${user.userId}${index}`} className="mentionedUser">
          <div className="mentionedUserSummary">
            <div className="mentionedUserEmail">{user.email}</div>
            <div className="bordOneToneIcon" onClick={() => handleRemoveUser(user)}>
              <BordOneToneIcon customWidth="1rem" variant="xSquare" />
            </div>
          </div>
          <MentionableUser user={user} />
        </div>
      ))}
    </div>
  );
};

export default MentionedUsers;

export interface IMentionedUsersProps {
  mentionedUsers: ImentionableUser[];
  handleRemoveUser: (user: ImentionableUser) => void;
}
