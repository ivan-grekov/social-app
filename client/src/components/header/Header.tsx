import './header.scss';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import React from 'react';
import Logo from '../logo/logo';
import userPhoto from '../../assets/images/Avatar.jpg';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="container">
        <div className="headerWrapper">
          <div className="headerLeft">
            <Link to="/">
              <Logo color={'white'} />
            </Link>
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
            <img src={userPhoto} className="headerUserImg" alt="user ava" />
          </div>
        </div>
      </div>
    </div>
  );
}
