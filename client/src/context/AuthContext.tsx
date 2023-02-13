import { createContext, useReducer, useEffect } from 'react';
import { AuthReducer } from './AuthReducer';
import { type Dispatch } from 'react';

export const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user') || '') || null,
  isFetching: false,
  error: false,
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
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
