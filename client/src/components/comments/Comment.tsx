import React from 'react';
import { IComment } from '../../static/types';
import './comments.scss';
import { format } from 'timeago.js';
import CloseIcon from '@mui/icons-material/Close';
import EditOffIcon from '@mui/icons-material/EditOff';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Comment = ({
  comment,
  postId,
}: {
  comment: IComment;
  postId: string;
}) => {
  const { user, dispatch } = React.useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [commentId, setCommentId] = React.useState('');

  const onClickDeleteComment = async () => {
    setCommentId(comment._id);
    try {
      await axios.delete(`/api/comments/${comment._id}`, {
        data: { userId: user?._id },
      });
      const { data } = await axios.get(`/api/comments?postId=${postId}`);
      dispatch({ type: 'SET_COMMENTS', payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="comment" key={comment._id}>
      <img className="commentImg"
           src={
             comment?.userImg
               ? publicFolder + comment.userImg
               : publicFolder + 'person/noAvatar.png'
           }
           alt="profile"/>
      <div className="info">
        <span>{comment.username}</span>
        <p>{comment.desc}</p>
      </div>
      <span className="date">{format(comment.createdAt)}</span>
      {user._id === comment.userId ? (
        <span className="closeBtn" onClick={onClickDeleteComment}>
          <CloseIcon />
        </span>
      ) : (
        <span
          className="closeBtnOff"
          title="You can delete only your's comment"
        >
          <EditOffIcon />
        </span>
      )}
    </div>
  );
};

export default Comment;
