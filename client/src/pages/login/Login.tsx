import './login.scss';
import React from "react";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="loginPromo">
          Login promo text
        </div>
        <div className="loginBlock">
          <input type="text" placeholder="Enter your login" className="loginInput"/>
          <input type="text" placeholder="Enter your password" className="loginInput"/>
        </div>
      </div>
    </>
  )
}
