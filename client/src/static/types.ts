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
  likes: [];
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
  username: string;
  email: string;
  password: string;
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

export interface UserContext {
  user: IUser | null;
  isFetching: boolean;
  error: boolean;
}
