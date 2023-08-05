export interface IBook {
  _id: number;
  title: string;
  author: string;
  description: string;
  publication_date: string;
  review: string;
  user: string;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IDecodedToken {
  userId: string;
  tokenEmail: string;
}
