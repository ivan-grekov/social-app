import { IUser } from '../static/types';

export const LoginStart = (userCredential: {
  email: string;
  password: string;
}) => ({
  type: 'LOGIN_START',
});

export const Logout = (user: IUser) => ({
  type: 'LOGOUT',
  payload: !user,
});

export const LoginSuccess = (user: IUser) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = (error: Error) => ({
  type: 'LOGIN_FAILURE',
});

export const UpdateUser = (user: IUser) => ({
  type: 'UPDATE_USER',
  payload: user,
});

export const Follow = (userId: string) => ({
  type: 'FOLLOW',
  payload: userId,
});

export const Unfollow = (userId: string) => ({
  type: 'UNFOLLOW',
  payload: userId,
});

export const setQuery = (query: string) => ({
  type: 'SET_QUERY',
  payload: query,
});
