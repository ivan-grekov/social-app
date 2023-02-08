import React, {useContext} from 'react';
import './formAuth.scss';
import {propsFormAuth} from '../../static/types';
import {loginCall} from '../../apiCalls';
import {AuthContext} from '../../context/AuthContext';
import {CircularProgress} from '@mui/material';
import {Link} from "react-router-dom";

const FormAuth = ({ title, isLogin }: propsFormAuth): JSX.Element => {
  const minLengthOfLoginPassword = 6;
  const emailAddress = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    loginCall(
      { email: emailAddress.current?.value, password: password.current?.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <>
      <form className="formAuth" onSubmit={handleClick}>
        <h2 className="formAuthTitle">{title}</h2>
        {!isLogin ? (
          <input className="input" placeholder="Enter your name" />
        ) : null}
        <input
          className="input"
          placeholder="Enter your email"
          type="email"
          required
          ref={emailAddress}
        />
        <input
          className="input"
          placeholder="Enter your password"
          type="password"
          required
          minLength={minLengthOfLoginPassword}
          ref={password}
        />
        {!isLogin ? (
          <input
            className="input"
            placeholder="Enter the password again"
            type="password"
            ref={password}
          />
        ) : null}
        <div className="">
          {isLogin ? (
            <div>
              No account?
              <Link to={`/register`}>
                <span className="signLink" onClick={() => handleClick}>
                  Sign up
                </span>
              </Link>
            </div>
          ) : (
            <div>
              Have an account?
              <Link to={`/login`}>
                <span className="signLink" onClick={() => handleClick}>
                  Sign in
                </span>
              </Link>
            </div>
          )}
        </div>
        <button className="buttonAuth button">
          {isFetching ? (
            <CircularProgress color="secondary" size="30px" />
          ) : (
            title
          )}
        </button>
      </form>
    </>
  );
};

export default FormAuth;
