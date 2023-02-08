import './register.scss';
import React from 'react';
import FormAuth from '../../components/formAuth/FormAuth';
import Promo from '../../components/promoAuth/Promo';

const Register: React.FC = () => {
  const titleName = 'Register';
  const isLogin = false;

  return (
    <div className="login">
      <div className="loginWrap">
        <div className="loginPromo">
          <Promo />
        </div>
        <div className="formAuth">
          <FormAuth title={titleName} isLogin={isLogin} />
        </div>
      </div>
    </div>
  );
};

export default Register;
