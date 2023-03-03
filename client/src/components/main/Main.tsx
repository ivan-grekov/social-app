import './main.scss';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';
import Rightbar from '../rightbar/Rightbar';
import React from "react";
import {AuthContext} from "../../context/AuthContext";
import {UserContext} from "../../static/types";

function Main() {
  const { user: currentUser } = React.useContext(
    AuthContext
  ) as UserContext;
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="mainWrapper">
            <Sidebar />
            <Feed />
            <Rightbar user={currentUser} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
