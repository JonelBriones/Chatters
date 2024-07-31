export interface Post {
  id: number;
  user_id: number;
  text: string;
  like: [];
  reply: [];
  save: [];
}
export interface User {
  id: number;
  username: string;
  name: string;
  posts: Post[];
}
