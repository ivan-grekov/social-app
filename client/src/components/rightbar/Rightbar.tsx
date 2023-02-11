import './rightbar.scss';
import { Users } from '../../static/Data';
import OnlineFriend from '../onlineFriend/OnlineFriend';
import {IFriends, IUser} from '../../static/types';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

interface RightbarProps {
  user?: IUser;
}

export default function Rightbar({ user }: RightbarProps) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get(`/api/users/friends/${user?._id}`)
        setFriends(friendsList.data)
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user?._id])

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="./assets/images/podarok_0.png"
            alt="gift icon"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="./assets/images/js.jpg" alt="view" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = (): JSX.Element => {
    const relationStatus =
      user?.relationship === 1
        ? 'Single'
        : user?.relationship === 2
        ? 'Married'
        : '-';
    return (
      <>
        <div className="profileRightBlock">
          <div className="profileDescriptions">
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">{user?.city}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">{user?.from}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">{relationStatus}</span>
              </div>
            </div>
          </div>
          <div className="followersBlock">
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              {friends.map((friend: IFriends) => (
                <Link to={`profile/${friend.username}`} style={{textDecoration: 'none'}}>
                  <div className="rightbarFollowing">
                    <img
                      src={friend.profilePicture ? friend.profilePicture :`${publicFolder}person/1.jpg`}
                      alt="person"
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">{friend.username}</span>
                  </div>
                </Link>
                )
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
