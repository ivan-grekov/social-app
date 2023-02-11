import './share.scss';
import {
  PermMedia,
  Label,
  EmojiEmotions,
  Room,
  Cancel,
} from '@mui/icons-material';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../static/types';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Share() {
  const { user } = useContext(AuthContext) as UserContext;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [file, setFile] = useState();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const newPost = {
      userId: user?._id,
      desc: desc?.current?.value,
      img: file,
    };

    try {
      console.log(newPost);
      await axios.post('api/posts', newPost);
    } catch (err) {
      console.log(err);
    }
  };

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
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src="{URL.createObjectURL(file)}" alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg .mp4, "
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement> // @ts-ignore
                ) => setFile(e.target.files[0])}
              />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
