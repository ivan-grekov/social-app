import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import {UserContext} from "../../static/types";
import {AuthContext} from "../../context/AuthContext";

export default function MenuProfile() {
  const { user } = React.useContext(AuthContext) as UserContext;
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{width: '45px',
          minWidth: '30px',
          height: '45px',
          borderRadius: '50%',
          backgroundImage: `url(${user?.profilePicture
              ? publicFolder + user.profilePicture
              : publicFolder + 'person/noAvatar.png'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'}}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
      >
      </Button>
      <Menu
        style={{}}
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        disableScrollLock={ true }
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
        <Link to={`/profile/${user?.username}`}>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
