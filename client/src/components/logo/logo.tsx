import React from "react";
import "./logo.scss"

interface propsLogo {
  color: string;
}

const Logo = ({color}: propsLogo): JSX.Element => {

  return (
      <h3 className="loginLogo"  style={{color: color}}>FRIENDSY</h3>
  )
}

export default Logo;
