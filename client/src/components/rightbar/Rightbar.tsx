import './rightbar.scss';
import Follower from '../../components/follower/Follower';
import ava02 from '../../assets/images/followers/ava02.jpg';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birdhdayContainer">
          <img
            src="./assets/images/podarok_0.png"
            alt="birdhdeyImg"
            className="birdhdeyImg"
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <Follower ava={ava02} userName={'Abram Gustov'} />
            <span className="rightbarOnline"> </span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <Follower ava={ava02} userName={'Abram Gustov'} />
            <span className="rightbarOnline"> </span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <Follower ava={ava02} userName={'Abram Gustov'} />
            <span className="rightbarOnline"> </span>
            </div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <Follower ava={ava02} userName={'Abram Gustov'} />
            <span className="rightbarOnline"> </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
