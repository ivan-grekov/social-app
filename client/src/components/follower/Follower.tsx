import './follower.scss';

interface propsFollower {
  ava: string;
  userName: string;
}
const Follower = ({ ava, userName }: propsFollower) => {
  return (
    <>
      <div className="follower">
        <img className={'followerImg'} src={ava} alt={'follower 01'} />
        <span className="followerName">{userName}</span>
      </div>
    </>
  );
};

export default Follower;
