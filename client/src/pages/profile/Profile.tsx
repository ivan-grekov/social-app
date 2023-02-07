import './profile.scss';
import Header from '../../components/header/Header';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile(): JSX.Element {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Header />
      <div className="profile">
        <Sidebar />
        <div className="profileBlock">
          <div className="profileBlockTop">
            <img
              src={`${publicFolder}fon.jpg`}
              className="profileFonImg"
              alt="cover view"
            />
            <img
              src={`${publicFolder}person/6.jpg`}
              className="profileUserImg"
              alt="user ava"
            />
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
