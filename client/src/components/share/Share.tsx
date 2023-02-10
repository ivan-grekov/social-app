import './share.scss';
import { PermMedia, Label, EmojiEmotions, Room } from '@mui/icons-material';
// import Follower from '../follower/Follower';
// import ava01 from '../../assets/images/followers/ava01.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../static/types';
import { Link } from 'react-router-dom';

function Share() {
  const { user } = useContext(AuthContext) as UserContext;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const name= {
  //   user?.username==undefined ? '' : user?.username
  // }

  console.log('Share user', user);
  console.log('Share user', user?.username);
  console.log('Share user', user?.profilePicture);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={`profile/${user?.username}`}>
            <img
              className="shareProfileImg"
              src={
                user?.profilePicture
                  ? PF + user.profilePicture
                  : PF + 'person/noAvatar.png'
              }
              alt=""
            />
          </Link>
          <input
            placeholder={
              user?.username === undefined
                ? "What's in your mind?"
                : "What's in your mind " + user?.username + '?'
            }
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
