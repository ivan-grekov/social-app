import './share.scss';
import {
  PermMedia,
  Label,
  EmojiEmotions,
  Room,
  Cancel,
} from '@mui/icons-material';
import React, { Dispatch, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { IUpdatedPost, UserContext } from '../../static/types';
import axios from 'axios';

let tags: string[] | undefined = [];

function Share() {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user, post, isCreatePost, dispatch } = React.useContext(
    AuthContext
  ) as UserContext;
  const [descInput, setDescInput] = React.useState<string | null>(post?.desc!);
  const [tagsInput, setTagsInput] = React.useState<string | null>(null);
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [buttonDis, setButtonDis] = useState<boolean>(true);
  const [buttonTagDis, setButtonTagDis] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [tagsInputPreview, setTagsInputPreview] = useState<string | undefined>(post?.tags!);
  // post?.tags ? tags = post?.tags!.split(';') : tags = [];

  useEffect(() => {
    setDescInput(post?.desc!);
  }, [post]);

  useEffect(() => {
    setTagsInputPreview(tags?.join(''));
  }, [tags]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
      setShowMessage(false);
      const newPost = {
        userId: user?._id,
        desc: descInput,
        img: post?.img,
        tags: tags?.join(';'),
      };
      if (fileInput) {
        const data = new FormData();
        const fileName = Date.now() + fileInput.name;
        data.append('name', fileName);
        data.append('file', fileInput);
        newPost.img = fileName;
        try {
          await axios.post('/api/upload', data);
        } catch (err) {
          console.log(err);
        }
      }
      if (post) {
        try {
          await axios.put(`/api/posts/${post._id}`, newPost);
          setFileInput(null);
          setDescInput(null);
          setTagsInput(null);
          setTagsInputPreview(undefined);
          setButtonTagDis(true);
          tags = [];
        } catch (error) {
          console.log(error);
        }
        const updatePost = async (
          updatedPost: IUpdatedPost,
          dispatch: Dispatch<any>
        ) => {
          dispatch({ type: 'UPDATE_POST', payload: null });
        };
        await updatePost(post, dispatch);
      } else {
        if (fileInput !== null && descInput !== '') {
          try {
            await axios.post('/api/posts', newPost);
            setFileInput(null);
            setDescInput(null);
            setTagsInput(null);
            setTagsInputPreview(undefined);
            setButtonTagDis(true);
            setShowMessage(false);
            tags = [];
          } catch (error) {
            console.log(error);
          }
          const createPost = async (
            isCreatedPost: boolean,
            dispatch: Dispatch<any>
          ) => {
            dispatch({type: 'CREATE_POST', payload: !isCreatedPost});
          };
          await createPost(isCreatePost, dispatch);
        } else {
          setShowMessage(true);
        }
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
            alt="share profile"
          />
          <input
            placeholder={`What's in your mind ${user?.username}?`}
            className="shareInput"
            value={
              descInput === null || descInput === undefined ? '' : descInput
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescInput(event.target.value);
            }}
          />
        </div>
        <hr className="shareHr" />
        <div className='showMessage'
             style={ !showMessage ? { display: 'none' } : { display: 'block' }}>
          Fill in the description and add an image
        </div>
        {fileInput && (
          <div className="shareImgContainer">
            <img
              className="shareImg"
              src={URL.createObjectURL(fileInput)}
              alt="share"
            />
            <Cancel
              className="shareCancelImg"
              onClick={() => setFileInput(null)}
            />
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
                  setFileInput(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareOption" onClick={() => buttonTagDis ? setButtonTagDis(false) : setButtonTagDis(true)}>
              <Label htmlColor="blue" className="shareIcon"/>
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
            <button className="shareButton" type="submit">
              Share
            </button>
          </div>

          <div className='tagPreviewBlock'>
            {tagsInputPreview && tags?.map((tag: string, index: number) => (
              <div className="shareTagContainer">
                {tag}
                <Cancel
                  className="shareCancelTag"
                  onClick={() => {
                    if (tagsInput !== '') {
                      tags?.splice( index,1);
                      setTagsInputPreview(tags?.join(''));
                    }
                  }}
                />
              </div>
             ))}
          </div>

          <div className='tagsInputBlock'>
            <input
              style={ buttonTagDis ? { display: 'none' } : { display: 'block' }}
              placeholder={'Enter tags'}
              className="tagInput"
              value={
                tagsInput === null || tagsInput === undefined ? '' : tagsInput
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (tagsInput !== '') {
                  setButtonDis(false);
                }
                setTagsInput(event.target.value);
              }}
            />
            <button className="shareTagButton"
                    type="button"
                    style={ buttonDis ? { display: 'none' } : { display: 'block' }}
                    onClick={() => {
                      if (tagsInput !== '') {
                        tags?.push('#' + tagsInput);
                        setTagsInputPreview(tags?.join(''));
                        setTagsInput(null);
                        setButtonDis(true);
                      }
                    }}>
              Add tag
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Share;
