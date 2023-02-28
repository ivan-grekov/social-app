import './conversation.scss';
import { ConversationProps } from '../../static/types';
import React from 'react';
import axios from 'axios';
import { IUser } from '../../static/types';

const Conversation = ({ conversation, currentUser }: ConversationProps) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = React.useState<IUser | null>(null);

  React.useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser?._id);

    const getUser = async () => {
      try {
        const res = await axios.get('/api/users?userId=' + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img className="conversationImg"
           alt="conversation"
           src={
             user?.profilePicture
            ? publicFolder + user.profilePicture
            : publicFolder + 'person/noAvatar.png'
           }/>
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
