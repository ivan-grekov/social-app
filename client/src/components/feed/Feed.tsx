import './feed.scss';
import Share from '../share/Share';
import Post from '../post/Post';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPost, FeedProps } from '../../static/types';

const Feed: React.FC<FeedProps> = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get(`/api/posts/timeline/63dc03b9e444260dccfca652`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <>
          <Share />
          {posts.map((p: IPost) => (
            <Post key={p._id} post={p} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Feed;
