export interface UserProps {
  user: {
    id: number;
    profilePicture: string;
    username: string;
  };
}

export interface IPost {
  _id: string;
  userId: string;
  desc?: string;
  img: string;
  likes: string[];
  createdAt: string;
}
export interface PostProps {
  post: IPost;
}

export interface propsFormAuth {
  title: string;
  isLogin: boolean;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password?: string;
  profilePicture?: string;
  coverPicture?: string;
  followers: [];
  followings: [];
  isAdmin: boolean;
  desc?: string;
  city?: string;
  from?: string;
  relationship?: number;
}

export interface FeedProps {
  username?: string;
}

export interface IFriends {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface UserContext {
  user: IUser | null;
  isFetching: boolean;
  error: boolean;
  dispatch: any;
  files?: string | null;
}

export interface RightbarProps {
  user?: IUser | null;
}
