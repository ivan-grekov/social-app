import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { propsMenuPost, UserContext } from "../../static/types";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

export default function MenuPost({postId, postUserId}: propsMenuPost) {
  const {user} = React.useContext(AuthContext) as UserContext;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditPost = async () => {
    setAnchorEl(null);
  };

  const handleDeletePost = async () => {
    setAnchorEl(null);
    try {
      await axios.delete(`/api/posts/${postId}`, {data: {userId: user?._id}});
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
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
        <MenuItem onClick={handleEditPost}>{(user?._id === postUserId) ? 'Edit post' : 'No edit post'}</MenuItem>
        <MenuItem onClick={handleDeletePost}>Delete post</MenuItem>
      </Menu>
    </div>
  );
}
