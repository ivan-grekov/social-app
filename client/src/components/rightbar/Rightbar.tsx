import './rightbar.scss';
import { Users } from '../../static/Data';
import OnlineFriend from '../onlineFriend/OnlineFriend';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="./assets/images/podarok_0.png"
            alt="birthdayImg"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
          </span>
        </div>

        <img
          className="rightbarAdImg"
          src="./assets/images/Kursy-JavaScript.jpg"
          alt="ad"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
