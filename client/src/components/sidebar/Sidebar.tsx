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
import Follower from '../../components/follower/Follower';
import ava02 from '../../assets/images/followers/ava02.jpg';
import ava03 from '../../assets/images/followers/ava03.png';
import ava04 from '../../assets/images/followers/ava04.png';
import ava05 from '../../assets/images/followers/ava05.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
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
          <li className="sidebarFriend">
            <Follower ava={ava02} userName={'Abram Gustov'} />
          </li>
          <li className="sidebarFriend">
            <Follower ava={ava03} userName={'Abram Gustov'} />
          </li>
          <li className="sidebarFriend">
            <Follower ava={ava04} userName={'Abram Gustov'} />
          </li>
          <li className="sidebarFriend">
            <Follower ava={ava05} userName={'Abram Gustov'} />
          </li>
        </ul>
      </div>
    </div>
  );
}
