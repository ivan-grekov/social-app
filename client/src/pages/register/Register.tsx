import './register.scss';
import React from "react";
import FormAuth from "../../components/formAuth/FormAuth";
import Promo from "../../components/promoAuth/Promo";

const Register: React.FC = () => {

  const handleRegister = (): void => {
    console.log('work register');
  }

  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginPromo">
          <Promo />
        </div>
        <div className="formAuth">
          <FormAuth title={"Register"} isLogin={false} handleClick={handleRegister()}/>
        </div>
      </div>
    </div>
  )
}

export default Register;
