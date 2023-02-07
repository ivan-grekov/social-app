import './profile.scss';
import Header from '../../components/header/Header';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import { useState, useEffect } from 'react';
import { IUser } from '../../static/types';
import axios from 'axios';
import { useParams } from 'react-router';

export default function Profile(): JSX.Element {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState<IUser>(Object);
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profileBlock">
          <div className="profileBlockTop">
            <img
              src={user.coverPicture || publicFolder + 'person/noCover.png'}
              className="profileFonImg"
              alt="cover view"
            />
            <img
              src={user.profilePicture || publicFolder + 'person/noAvatar.png'}
              className="profileUserImg"
              alt="user ava"
            />
            <div className="profileInfo">
              <h3 className="profileName">{user.username}</h3>
              <div className="profileStatus">{user.desc}</div>
            </div>
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
