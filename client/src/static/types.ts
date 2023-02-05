export interface UserProps {
  user: {
    id: number;
    profilePicture: string;
    username: string;
  };
}

export interface PostProps {
  post: {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
  };
}
