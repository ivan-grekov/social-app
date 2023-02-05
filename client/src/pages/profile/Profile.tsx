import './profile.scss';
import userPhoto from '../../assets/images/Avatar.jpg';
import background from '../../assets/images/fon.jpg';
import Header from '../../components/header/Header';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile(): JSX.Element {
  return (
    <>
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profileBlock">
          <div className="profileBlockTop">
            <img src={background} className="profileFonImg" alt="cover view" />
            <img src={userPhoto} className="profileUserImg" alt="user ava" />
            <div className="profileInfo">
              <h3 className="profileName">Tribis Alexandr</h3>
              <div className="profileStatus">Follow your heart</div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
