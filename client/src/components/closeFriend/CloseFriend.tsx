import './closeFriend.scss';
import { UserProps } from '../../static/types';

const CloseFriend: React.FC<UserProps> = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={publicFolder + user.profilePicture}
        alt="profile icon"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
export default CloseFriend;
