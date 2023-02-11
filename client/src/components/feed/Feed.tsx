import './feed.scss';
import Share from '../share/Share';
import Post from '../post/Post';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {IPost, FeedProps, UserContext} from '../../static/types';
import {AuthContext} from "../../context/AuthContext";

const Feed: React.FC<FeedProps> = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = React.useContext(AuthContext) as UserContext;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get(`/api/posts/timeline/${user?._id}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <>
          {(!username || username === user?.username) && <Share />}
          {posts.map((p: IPost) => (
            <Post key={p._id} post={p} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Feed;
