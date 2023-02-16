import './header.scss';
import { Person, Chat, Notifications } from '@mui/icons-material';
import SearchBar from '../search/Search';
import React from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../static/types';
import BurgerMenu from '../burgerMenu/BurgerMenu';

export default function Header(): JSX.Element {
  const { user } = React.useContext(AuthContext) as UserContext;
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

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
            <SearchBar />
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
            <Link to={`/profile/${user?.username}`}>
              <img
                src={
                  user?.profilePicture
                    ? publicFolder + user.profilePicture
                    : publicFolder + 'person/noAvatar.png'
                }
                className="headerUserImg"
                alt="user ava"
              />
            </Link>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
