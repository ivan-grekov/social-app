import './header.scss';
import { Person, Chat, Notifications } from '@mui/icons-material';
import SearchBar from '../search/Search';
import React, { useState } from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../static/types';
import MenuProfile from '../menuProfile/MenuProfile';
import { Menu, Close } from '@mui/icons-material';
import MobileMenu from '../menu/MobileMenu';

export default function Header(): JSX.Element {
  const { user } = React.useContext(AuthContext) as UserContext;
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [nav, setNav] = useState(false);
  const menuActive = 'menu active';
  const menu = 'menu';

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
              <Link to={'messenger/'} style={{ color: 'inherit' }}>
                <div className="headerIconItem">
                  <Chat />
                  <span className="headerIconBadge">1</span>
                </div>
              </Link>
              <div className="headerIconItem">
                <Notifications />
                <span className="headerIconBadge">1</span>
              </div>
            </div>
            <MenuProfile />
            <div onClick={() => setNav(!nav)} className="mobilBtn">
              {nav ? <Close className='menuIcon' /> : <Menu className='menuIcon' />}
            </div>
            <div className={nav ? `${menuActive}` : `${menu}`}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
