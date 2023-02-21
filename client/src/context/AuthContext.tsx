import { createContext, useReducer, useEffect } from 'react';
import { AuthReducer } from './AuthReducer';
import { type Dispatch } from 'react';

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
  dispatch: (() => undefined) as Dispatch<any>,
};

interface PropsAuthContextProvider {
  children: JSX.Element;
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }: PropsAuthContextProvider) => {
  // @ts-ignore
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
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
