import React from 'react';
import './onlineFriend.scss';
import { UserProps } from '../../static/types';

const OnlineFriend: React.FC<UserProps> = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt="user icon"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default OnlineFriend;
