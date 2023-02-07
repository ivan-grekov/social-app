import React, { useState } from 'react';
import './formAuth.scss';
import { propsFormAuth } from '../../static/types';

const FormAuth = ({
  title,
  isLogin,
  handleClick,
}: propsFormAuth): JSX.Element => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <form className="formAuth">
        <h2 className="formAuthTitle">{title}</h2>
        {!isLogin ? (
          <input
            className="input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : null}
        <input
          className="input"
          placeholder="Enter your email"
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          placeholder="Enter your password"
          value={pass}
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        {!isLogin ? (
          <input
            className="input"
            placeholder="Enter the password again"
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />
        ) : null}
        <div className="">
          {isLogin ? (
            <div>
              No account?
              <span className="signLink" onClick={() => handleClick}>
                Sign up
              </span>
            </div>
          ) : (
            <div>
              Have an account?
              <span className="signLink" onClick={() => handleClick}>
                Sign in
              </span>
            </div>
          )}
        </div>
        <button className="buttonAuth button">{title}</button>
      </form>
    </>
  );
};

export default FormAuth;
