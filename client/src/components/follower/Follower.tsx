import "./follower.scss";
import React from "react";

const Follower = (ava: string, userName: string) => {
  return (
    <>
      <div className="follower">
        <img className={"followerImg"} src={ava} alt={"follower 01"}/>
        <span className="followerName">{userName}</span>
      </div>
    </>
  )
}

export default Follower;
