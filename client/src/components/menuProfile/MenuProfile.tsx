import './menuProfile.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { UserContext } from '../../static/types';
import { AuthContext } from '../../context/AuthContext';
import { logoutCall } from '../../apiCalls';

export default function MenuProfile() {
  const { user, dispatch } = React.useContext(AuthContext) as UserContext;
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    localStorage.setItem('user', JSON.stringify(null));
    logoutCall(dispatch);
  };

  return (
    <div className="headerUserImg">
      <Button className='headerUserBtn'
        style={{
          backgroundImage: `url(${
            user?.profilePicture
              ? publicFolder + user.profilePicture
              : publicFolder + 'person/noAvatar.png'
          })`,
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menuProfile' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ></Button>
      <Menu
        style={{}}
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        disableScrollLock={true}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`/profile/${user?.username}`}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to={`/account/${user?.username}`}>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
        <Link to={`/login`}>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
