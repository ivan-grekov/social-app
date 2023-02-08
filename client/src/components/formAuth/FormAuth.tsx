import React, { useState, useRef } from 'react';
import './formAuth.scss';
import { propsFormAuth } from '../../static/types';

const FormAuth = ({ title, isLogin }: propsFormAuth): JSX.Element => {
  const minLengthOfLoginPassword = 6;
  const emailAddress = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
