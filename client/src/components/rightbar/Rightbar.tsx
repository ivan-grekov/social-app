import './rightbar.scss';
import { Users } from '../../static/Data';
import OnlineFriend from '../onlineFriend/OnlineFriend';
import {IFriends, UserContext, RightbarProps} from '../../static/types';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material";

export default function Rightbar({ user }: RightbarProps): JSX.Element {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user:currentUser, dispatch } = React.useContext(AuthContext) as UserContext;
  const [followed, setFollowed] = useState(currentUser?.followings.includes(user?._id));

  console.log(user?._id);

  useEffect(() => {
    setFollowed(currentUser?.followings.includes(user?._id));
  }, [currentUser, user?._id]);

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
  }, [user])

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`api/users/${user?._id}/unfollow`, {userId: currentUser?._id});
        dispatch({type: 'UNFOLLOW', payload: user?._id});
      } else {
        await axios.put(`api/users/${user?._id}/follow`, {userId: currentUser?._id});
        dispatch({type: 'FOLLOW', payload: user?._id});
      }
    } catch (err) {
      console.log (err);
    }
    setFollowed(!followed);
  }

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
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">{relationStatus}</span>
              </div>
            </div>
          </div>
          <div className="followersBlock">
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              {friends.map((friend: IFriends) => (
                <Link to={`/profile/${friend.username}`} style={{textDecoration: 'none'}}>
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
