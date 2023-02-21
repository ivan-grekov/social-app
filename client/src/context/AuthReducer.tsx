import { IUser } from '../static/types';
// type AvailableActions =
//   | LoginStartAction
//   | LoginSuccessAction
//   | LoginFailureAction
//   | FollowAction
//   | UnfollowAction;

// type Action<T, P> = { type: T } & P;

// type LoginStartAction = Action<'LOGIN_START', {}>;
// type LoginSuccessAction = Action<'LOGIN_SUCCESS', {}>;
// type LoginFailureAction = Action<'LOGIN_FAILURE', {}>;
// type FollowAction = Action<'FOLLOW', {}>;
// type UnfollowAction = Action<'UNFOLLOW', {}>;

export const AuthReducer = (
  state: { user: IUser; isFetching: boolean; error: boolean; query: string },
  action: any
) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    case 'UPDATE_USER':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'FOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case 'UNFOLLOW':
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following: string) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
