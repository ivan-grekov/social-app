import axios from 'axios';
import { type Dispatch } from 'react';
import { IUser } from './static/types';

export const loginCall = async (
  userCredential: {
    email: string | undefined;
    password: string | undefined;
  },
  dispatch: Dispatch<any>
) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('/api/auth/login', userCredential);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};

export const logoutCall = async (dispatch: Dispatch<any>) => {
  dispatch({ type: 'LOGOUT' });
};
