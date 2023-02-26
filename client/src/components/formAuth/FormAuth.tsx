import React, {useContext, useState} from 'react';
import './formAuth.scss';
import { propsFormAuth } from '../../static/types';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAuth = ({ title, isLogin }: propsFormAuth): JSX.Element => {
  const minLengthOfLoginPassword = 6;
  const username = React.useRef<HTMLInputElement>(null);
  const emailAddress = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const passwordAgain = React.useRef<HTMLInputElement>(null);
  const { isFetching, dispatch } = useContext(AuthContext);
  const [showMessageTaken, setShowMessageTaken] = useState<boolean>(false);
  const [showMessageIncorrect, setShowMessageIncorrect] = useState<boolean>(false);
  const history = useNavigate();

  const handleClickLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      loginCall(
        { email: emailAddress.current?.value, password: password.current?.value },
        dispatch
      );
    } catch (err) {
      setShowMessageIncorrect(true);
      console.log(err);
    }
  };

  const handleClickRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordAgain.current?.value !== password.current?.value) {
      passwordAgain.current?.setCustomValidity(`Passwords don't match`);
    } else {
      const userRegister = {
        username: username.current?.value,
        email: emailAddress.current?.value,
        password: password.current?.value,
      };
      try {
        await axios.post('/api/auth/register', userRegister);
        history('/login');
      } catch (err) {
        if (err instanceof Error) {
          if (err.message === 'Request failed with status code 500') {
            setShowMessageTaken(true);
          }
        } else {
          console.log('Unexpected error', err);
        }
        // console.log(err);
      }
    }
  };

  return (
    <>
      <form
        className="formAuth"
        onSubmit={isLogin ? handleClickLogin : handleClickRegister}
      >
        <h2 className="formAuthTitle">{title}</h2>
        {!isLogin ? (
          <input
            className="input"
            placeholder="Enter your name"
            required
            ref={username}
          />
        ) : null}
        <input
          className="input"
          placeholder="Enter your email"
          type="email"
          required
          ref={emailAddress}
        />
        <div className='messageError emailTaken'
             style={ !showMessageTaken ? { display: 'none' } : { display: 'block' }}>
          This email is already taken
        </div>
        <input
          className="input"
          placeholder="Enter your password"
          type="password"
          required
          minLength={minLengthOfLoginPassword}
          ref={password}
        />
        <div className='messageError messageIncorrect'
             style={ !showMessageIncorrect ? { display: 'none' } : { display: 'block' }}>
          Incorrect login or password
        </div>
        {!isLogin ? (
          <input
            className="input"
            placeholder="Enter the password again"
            type="password"
            required
            minLength={minLengthOfLoginPassword}
            ref={passwordAgain}
          />
        ) : null}
        <div className="">
          {isLogin ? (
            <div>
              No account?
              <Link to={`/register`}>
                <span className="signLink">Sign up</span>
              </Link>
            </div>
          ) : (
            <div>
              Have an account?
              <Link to={`/login`}>
                <span className="signLink">Sign in</span>
              </Link>
            </div>
          )}
        </div>
        <button className="buttonAuth button" type="submit">
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
