import './closeFriend.scss';
import { UserProps } from '../../static/types';

const CloseFriend: React.FC<UserProps> = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={user.profilePicture}
        alt="profile icon"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
export default CloseFriend;
