import './rightbar.scss';
import { Users } from '../../static/Data';
import OnlineFriend from '../onlineFriend/OnlineFriend';

interface RightbarProps {
  profile?: boolean;
}

export default function Rightbar({ profile }: RightbarProps) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="./assets/images/podarok_0.png"
            alt="gift icon"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="./assets/images/js.jpg" alt="view" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Minsk</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Belarus</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}person/1.jpg`}
              alt="person"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sam</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}person/2.jpg`}
              alt="person"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sam</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${publicFolder}person/3.jpg`}
              alt="person"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sam</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
