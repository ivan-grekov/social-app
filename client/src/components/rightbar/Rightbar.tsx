import './rightbar.scss';
import OnlineFriend from '../onlineFriend/OnlineFriend';
import { IFriend, RightbarProps, UserContext, IUser } from '../../static/types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';
import { useParams } from 'react-router';
import { CircularProgress } from '@mui/material';

export default function Rightbar({ user }: RightbarProps): JSX.Element {
  const { user: currentUser, dispatch } = React.useContext(
    AuthContext
  ) as UserContext;
  const { username } = useParams();
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [onlineFriends, setOnlineFriends] = useState<IUser[]>([]);
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currentUser?.followings.includes(user?._id!)
  );
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dateToday = mm + '-' + dd;

  const friendsBirthday: IFriend[] = [];

  useEffect(() => {
    const getFriends = async () => {
      try {
        if (user?._id) {
          const friendsList = await axios.get(
            `/api/users/friends/${user?._id}`
          );
          setFriends(friendsList.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  if (!username && friends.length !== 0) {
    friends.forEach((friend: IFriend) => {
      if (friend.birthday) {
        if (friend.birthday.slice(5, 10) === dateToday) {
          friendsBirthday.push(friend);
        }
      }
    });
  }

  useEffect(() => {
    setFollowed(currentUser?.followings.includes(user?._id!));
  }, [currentUser, user?._id]);

  useEffect(() => {
    const getOnlineUsers = async () => {
      const { data } = await axios.get('/api/users/all');
      const randomUsers = data
        .filter(
          (user: IUser) => !user.profilePicture && user._id !== currentUser?._id
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setOnlineFriends(randomUsers);
    };
    getOnlineUsers();
  }, []);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/api/users/${user?._id}/unfollow`, {
          userId: currentUser?._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user?._id });
      } else {
        await axios.put(`/api/users/${user?._id}/follow`, {
          userId: currentUser?._id,
        });
        dispatch({ type: 'FOLLOW', payload: user?._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        {friendsBirthday.length !== 0 && (
          <div className="birthdayContainer">
            <div className="birthdayContainerIntro">
              <img
                className="birthdayImg"
                src="./assets/images/podarok_0.png"
                alt="gift icon"
              />
              <span className="birthdayText">Have a birthday today:</span>
            </div>
            <div className="rightbarBDBlock">
              {friendsBirthday.map((friend: IFriend) => (
                <Link
                  to={`/profile/${friend.username}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  key={friend._id}
                >
                  <div className="friendBlock">
                    <img
                      src={
                        friend.profilePicture
                          ? publicFolder + friend.profilePicture
                          : publicFolder + 'person/noAvatar.png'
                      }
                      alt="person"
                      className="bDBImg"
                    />
                    <span className="rightbarFriendName">
                      {friend.username}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        <img className="rightbarAd" src="./assets/images/js.jpg" alt="view" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {onlineFriends.map((u) => (
            <Link
              to={`/profile/${u.username}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              key={u._id}
            >
              <OnlineFriend user={u} />
            </Link>
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
          {user?.username !== currentUser?.username && (
            <button className="button addFollow" onClick={handleClick}>
              {followed ? 'Unfollow' : 'Follow'}
              {followed ? <Remove /> : <Add />}
            </button>
          )}
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
                <span className="rightbarInfoKey">Birthday:</span>
                <span className="rightbarInfoValue">{user?.birthday}</span>
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
              {friends.length > 0 &&
                friends.map((friend: IFriend) => (
                  <Link
                    to={`/profile/${friend.username}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    key={friend._id}
                  >
                    <div className="rightbarFollowing">
                      <img
                        src={
                          friend.profilePicture
                            ? publicFolder + friend.profilePicture
                            : publicFolder + 'person/noAvatar.png'
                        }
                        alt="person"
                        className="rightbarFollowingImg"
                      />
                      <span className="rightbarFollowingName">
                        {friend.username}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {username ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
