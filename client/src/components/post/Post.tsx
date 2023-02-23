import './post.scss';
import React, { useState, useEffect } from 'react';
import { PostProps, UserContext } from '../../static/types';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import MenuPost from '../menuPost/MenuPost';
import Comments from '../comments/Comments';

const Post: React.FC<PostProps> = ({ post }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState<Number>(post.likes.length);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [commentOpen, setCommentOpen] = useState(false);
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
            <MenuPost post={post} />
            {/*<MoreVert />*/}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src={
              post.img
                ? publicFolder + post.img
                : publicFolder + 'post/noPost.jpg'
            }
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
          <div className="postBottomRight">
            <span
              className="postCommentText"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              comments
            </span>
          </div>
        </div>
        {commentOpen && (
          <Comments postId={post._id} commentOpen={commentOpen} />
        )}
      </div>
    </div>
  );
};

export default Post;
