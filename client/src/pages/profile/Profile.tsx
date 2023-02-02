import "./profile.scss";
import userPhoto from '../../assets/images/Avatar.jpg';
import backGround from "../../assets/images/fon.jpg";

export default function Profile() {
  return (
    <>
      <div className="topBar">Topbar</div>
      <div className="profile">
        <div className="sideBar">Sidebar</div>
        <div className="profileBlock">
          <div className="profileBlockTop">
            <img src={backGround} className="profileFonImg" alt="fon"/>
            <img src={userPhoto} className="profileUserImg" alt="user ava"/>
            <div className="profileInfo">
              <h3 className="profileName">Tribis Alexandr</h3>
              <div className="profileStatus">Follow your heart</div>
            </div>
          </div>
          <div className="profileBlockBottom">
            <div className="feeds">Feeds</div>
            <div className="profileRightBlock">Right</div>
          </div>
        </div>
      </div>
    </>
  )

}
