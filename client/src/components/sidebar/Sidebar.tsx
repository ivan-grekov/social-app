import '../../scss/main.scss';
import './sidebar.scss';
import {
  RssFeed,
  Chat,
  VideoLibrary,
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
          <Link to={'/messenger'} style={{ color: 'inherit' }}>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
          </Link>
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
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
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
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
