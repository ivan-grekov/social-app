import "./profile.scss";
import userPhoto from '../../assets/images/Avatar.jpg';
import background from "../../assets/images/fon.jpg";
import ava01 from "../../assets/images/followers/ava01.jpg";
import ava02 from "../../assets/images/followers/ava02.jpg";
import ava03 from "../../assets/images/followers/ava03.png";
import ava04 from "../../assets/images/followers/ava04.png";
import Header from "../../components/header/Header";
import React from "react";
import Follower from "../../components/follower/Follower";

export default function Profile(): JSX.Element {
  return (
    <>
      <Header/>
      <div className="profile">
        <div className="sideBar">Sidebar</div>
        <div className="profileBlock">
          <div className="profileBlockTop">
            <img src={background} className="profileFonImg" alt="fon"/>
            <img src={userPhoto} className="profileUserImg" alt="user ava"/>
            <div className="profileInfo">
              <h3 className="profileName">Tribis Alexandr</h3>
              <div className="profileStatus">"Follow your heart"</div>
            </div>
          </div>
          <div className="profileBlockBottom">
            <div className="feeds">Feeds</div>
            <div className="profileRightBlock">
              <div className="profileDescriptions">
                <h4 className="profileDescriptionInfo">User info</h4>
                <div className="profileDescription">
                  <span className="profileDescriptionName">City:</span>
                  <span className="profileDescriptionValue">Minsk</span>
                </div>
                <div className="profileDescription">
                  <span className="profileDescriptionName">Country:</span>
                  <span className="profileDescriptionValue">Belarus</span>
                </div>
                <div className="profileDescription">
                  <span className="profileDescriptionName">Family status:</span>
                  <span className="profileDescriptionValue">Married</span>
                </div>
              </div>
              <div className="followersBlock">
                <h4 className="profileDescriptionInfo">Followers</h4>
                <div className="followers">
                  <Follower ava={ava01} userName={"Abram Gustov"}/>
                  <Follower ava={ava02} userName={"Gregory Chestor"}/>
                  <Follower ava={ava03} userName={"Ivan Ivanov"}/>
                  <Follower ava={ava04} userName={"Federico Augustino"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
