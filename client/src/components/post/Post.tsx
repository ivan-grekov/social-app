import './post.scss';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../static/Data';
import { useState } from 'react';
import { PostProps } from '../../static/types';

const Post: React.FC<PostProps> = ({ post }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="profile icon"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src={publicFolder + post.photo}
            alt="post overview"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${publicFolder}like.png`}
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src={`${publicFolder}heart.png`}
              alt="heart"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="posrBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
