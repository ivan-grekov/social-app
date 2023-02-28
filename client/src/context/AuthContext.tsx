import { createContext, useReducer, useEffect } from 'react';
import { AuthReducer } from './AuthReducer';
import { type Dispatch } from 'react';
import { IComment } from '../static/types';

const local = JSON.parse(localStorage.getItem('user') as string);

if (!local) {
  localStorage.setItem('user', JSON.stringify(null));
}
const userState = JSON.parse(localStorage.getItem('user') as string);

export const INITIAL_STATE = {
  user: userState,
  post: null,
  isCreatePost: false,
  isFetching: false,
  error: false,
  query: '',
  comments: [] as IComment[],
  dispatch: (() => undefined) as Dispatch<any>,
};

interface PropsAuthContextProvider {
  children: JSX.Element;
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }: PropsAuthContextProvider) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        post: state.post,
        isCreatePost: state.isCreatePost,
        isFetching: state.isFetching,
        error: state.error,
        query: state.query,
        comments: state.comments,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
