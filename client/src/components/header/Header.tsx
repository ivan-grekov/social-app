import './header.scss';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="headerWrapper">
          <div className="headerLeft">
            <span className="logo">Social App</span>
          </div>
          <div className="headerCenter">
            <div className="searchbar">
              <Search className="searchIcon" />
              <input
                placeholder="Search for friend, post or video"
                className="searchInput"
              />
            </div>
          </div>
          <div className="headerRight">
            <div className="headerLinks">
              <span className="headerLink">Homepage</span>
              <span className="headerLink">Timeline</span>
            </div>
            <div className="headerIcons">
              <div className="headerIconItem">
                <Person />
                <span className="headerIconBadge">1</span>
              </div>
              <div className="headerIconItem">
                <Chat />
                <span className="headerIconBadge">1</span>
              </div>
              <div className="headerIconItem">
                <Notifications />
                <span className="headerIconBadge">1</span>
              </div>
            </div>
            <img
              src="./assets/images/person/1.jpg"
              alt="avatar"
              className="headerImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
