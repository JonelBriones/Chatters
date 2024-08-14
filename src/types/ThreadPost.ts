export interface PostInterface {
  id: number;
  user_id: number;
  text: string;
  like: [];
  reply: [];
  save: [];
}
export interface UserInterface {
  id: number;
  username: string;
  name: string;
  posts: PostInterface[];
}
