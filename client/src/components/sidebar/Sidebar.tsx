import '../../scss/main.scss';
import './sidebar.scss';
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
import { Users } from '../../static/Data';
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';

export default function Sidebar() {
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
              to={'/music'}
              style={{ textDecoration: 'none' }}
              className="sidebarListItem"
            >
              <LibraryMusic className="sidebarIcon" />
              <span className="sidebarListItemText">Music</span>
            </Link>
            <li className="sidebarListItem">
              <QuestionMark className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <Work className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <Link
              to={'/courses'}
              className="sidebarListItem"
              style={{ textDecoration: 'none' }}
            >
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </Link>
          </ul>
          {/* <button className="sidebarButton">Show More</button> */}
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
