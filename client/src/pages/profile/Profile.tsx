import './profile.scss';
import Header from '../../components/header/Header';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import React, { useState, useEffect } from 'react';
import {IUser, UserContext} from '../../static/types';
import axios from 'axios';
import { useParams } from 'react-router';
import {AuthContext} from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material";

export default function Profile(): JSX.Element {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState<IUser>(Object);
  const { username } = useParams();
  const { user: currentUser, dispatch } = React.useContext(
    AuthContext
  ) as UserContext;
  const [followed, setFollowed] = useState(
    currentUser?.followings.includes(user?._id!)
  );

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    setFollowed(currentUser?.followings.includes(user?._id!));
  }, [currentUser, user?._id]);

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
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profileBlock">
          <div className="profileBlockTop">
            <img
              src={
                user.coverPicture
                  ? publicFolder + user.coverPicture
                  : publicFolder + 'person/noCover.png'
              }
              className="profileFonImg"
              alt="cover view"
            />
            <img
              src={
                user.profilePicture
                  ? publicFolder + user.profilePicture
                  : publicFolder + 'person/noAvatar.png'
              }
              className="profileUserImg"
              alt="user ava"
            />
            <div className="profileInfo">
              <h3 className="profileName">{user.username}</h3>
              <div className="profileStatus">{user.desc}</div>
            </div>
            {user?.username !== currentUser?.username && (
              <button className="button addFollowProfile" onClick={handleClick}>
                {followed ? 'Unfollow' : 'Follow'}
                {followed ? <Remove /> : <Add />}
              </button>
            )}
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
