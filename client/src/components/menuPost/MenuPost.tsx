import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IUpdatedPost, propsMenuPost, UserContext} from "../../static/types";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {Dispatch} from "react";

export default function MenuPost({post}: propsMenuPost) {
  const { user, isCreatePost, dispatch } = React.useContext(AuthContext) as UserContext;
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
    const updatePost = async (
      updatedPost: IUpdatedPost,
      dispatch: Dispatch<any>
    ) => {
        dispatch({ type: 'UPDATE_POST', payload: post });
      };
    await updatePost(post, dispatch);
  };

  const handleNoEditPost = () => {
    setAnchorEl(null);
  }

  const handleDeletePost = async () => {
    setAnchorEl(null);
    try {
      await axios.delete(`/api/posts/${post._id}`, {data: {userId: user?._id}});
    } catch (error) {
      console.log(error);
    }
    const deletePost = async (
      isCreatedPost: boolean,
      dispatch: Dispatch<any>
    ) => {
      dispatch({ type: 'CREATE_POST', payload: !isCreatedPost });
    };
    await deletePost(isCreatePost, dispatch);
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
        <MenuItem onClick={(user?._id === post.userId) ? handleEditPost : handleNoEditPost}>{(user?._id === post.userId) ? 'Edit post' : 'No edit post'}</MenuItem>
        {(user?._id === post.userId) ? <MenuItem onClick={handleDeletePost}>Delete post</MenuItem> : null}
      </Menu>
    </div>
  );
}
