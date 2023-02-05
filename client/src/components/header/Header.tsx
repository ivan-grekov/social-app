import './header.scss';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import Follower from "../../components/follower/Follower";
import ava01 from '../../assets/images/followers/ava01.jpg';
import React from "react";
import Logo from "../logo/logo";



export default function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="container">
        <div className="headerWrapper">
          <div className="headerLeft">
            <Logo color={"white"}/>
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
            <Follower ava={ava01} userName={'Abram Gustov'} />
          </div>
        </div>
      </div>
    </div>
  );
}
