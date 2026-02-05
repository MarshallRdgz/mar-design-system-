import BordPhoto from '../../BordPhoto/BordPhoto';
import './MentionableUser.scss';

const MentionableUser = ({ user, handleSelectUser, hideOptionsCallback }: ImentionableUserProps) => {
  const { firstName, lastName, email, photoUrl } = user;

  const fullName = `${firstName || ''} ${lastName || ''}`.trim();

  const handleClick = () => {
    handleSelectUser?.(user);
    hideOptionsCallback?.();
  };

  return (
    <div className="mentionableUser" onClick={handleClick}>
      <BordPhoto
        url={photoUrl}
        imageProps={{
          style: {
            width: '2rem',
            height: '2rem',
          },
        }}
        size="s20"
        variant="circle"
        avatarProps={{
          variant: 'circularBordMascot',
          customWidth: '2rem',
        }}
      />
      <div className="mentionableUserInfo">
        <div className="mentionableUserInfoName">{fullName}</div>
        <div className="mentionableUserInfoEmail">{email}</div>
      </div>
    </div>
  );
};

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
