import './feed.scss';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../static/Data';

const Feed: React.FC = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <>
          <Share />
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Feed;
