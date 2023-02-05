import './post.scss';
import { MoreVert } from '@mui/icons-material';
import Follower from '../follower/Follower';
import ava01 from '../../assets/images/followers/ava01.jpg';

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Follower ava={ava01} userName={'Abram Gustov'} />
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post :)</span>
          <img
            className="postImg"
            src="./assets/images/post/post-1.jpg"
            alt="post1"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="./assets/images/like.png"
              alt="like"
            />
            <img
              className="likeIcon"
              src="./assets/images/heart.png"
              alt="heart"
            />
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="posrBottomRight">
            <span className="postCommentText">9 comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
