import './post.scss';
import { MoreVert } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { PostProps, UserContext } from '../../static/types';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Post: React.FC<PostProps> = ({ post }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState<Number>(post.likes.length);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [user, setUser] = useState(Object);
  const { user: currentUser } = React.useContext(AuthContext) as UserContext;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser?._id!));
  }, [currentUser?._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put(`/api/posts/${post._id}/like`, { userId: currentUser?._id });
    } catch (err) {}

    setLike(isLiked ? Number(like) - 1 : Number(like) + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? publicFolder + user.profilePicture
                    : publicFolder + 'person/noAvatar.png'
                }
                alt="profile icon"
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src={publicFolder + post.img}
            alt="post overview"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${publicFolder}like.png`}
              alt="like"
            />
            <img
              onClick={likeHandler}
              className="likeIcon"
              src={`${publicFolder}heart.png`}
              alt="heart"
            />
            <span className="postLikeCounter">
              {Number(like)} people liked it
            </span>
          </div>
          <div className="posrBottomRight">
            <span className="postCommentText">comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
