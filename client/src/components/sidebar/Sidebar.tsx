import '../../scss/main.scss';
import './sidebar.scss';
import React from 'react';
import { AuthContext } from '../../context/AuthContext';
import { IUser, UserContext } from '../../static/types';
import axios from 'axios';
import {
  RssFeed,
  Chat,
  VideoLibrary,
  LibraryMusic,
  Groups,
  Bookmark,
  QuestionMark,
  Work,
  Event,
  School,
} from '@mui/icons-material';
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function Sidebar({ profilePage }: { profilePage?: boolean }) {
  const { user } = React.useContext(AuthContext) as UserContext;
  const [friends, setFriends] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    const getFriends = async () => {
      try {
        if (user?._id) {
          const { data } = await axios.get(`/api/users/friends/${user?._id}`);
          setFriends(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarContainer">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <Link
              to={'/messenger'}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <li className="sidebarListItem">
                <Chat className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
              </li>
            </Link>
            <Link
              to={'/'}
              style={{ textDecoration: 'none' }}
              className="sidebarListItem"
            >
              <LibraryMusic className="sidebarIcon" />
              <span className="sidebarListItemText">Music</span>
            </Link>
            <li className="sidebarListItem">
              <Groups className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarcs</span>
            </li>
            <li className="sidebarListItem">
              <QuestionMark className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <Work className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <Link
              to={'/calendar'}
              className="sidebarListItem"
              style={{ textDecoration: 'none' }}
            >
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </Link>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {!profilePage &&
              friends.length > 0 &&
              friends.map((u) => (
                <Link
                  to={`/profile/${u.username}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  key={u._id}
                >
                  <CloseFriend user={u} />
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
