import React from "react";
import "./promo.scss"
import Logo from "../logo/logo";

const Promo = (): JSX.Element => {
  return (
    <div className="loginPromo">
      <Logo color={"#1877f2"}/>
      <div className="loginSlogan">Connecting people</div>
    </div>
  )
}

export default Promo;
