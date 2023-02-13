import './share.scss';
import {
  PermMedia,
  Label,
  EmojiEmotions,
  Room,
  Cancel,
} from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../static/types';
import axios from 'axios';

function Share() {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = React.useContext(AuthContext) as UserContext;
  const desc = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      userId: user?._id,
      desc: desc.current?.value,
      img: '',
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      try {
        await axios.post('/api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post('/api/posts', newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user?.profilePicture
                ? publicFolder + user.profilePicture
                : publicFolder + 'person/noAvatar.png'
            }
            alt="share profile picture"
          />
          <input
            placeholder={`What's in your mind ${user?.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img
              className="shareImg"
              src={URL.createObjectURL(file)}
              alt="share picture"
            />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.target.files) return;
                  setFile(e.target.files[0]);
                }}
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
