import React from 'react';
import './onlineFriend.scss';
import { UserProps } from '../../static/types';

const OnlineFriend: React.FC<UserProps> = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={
            user.profilePicture
              ? publicFolder + user.profilePicture
              : publicFolder + 'person/noAvatar.png'
          }
          alt="user icon"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default OnlineFriend;
