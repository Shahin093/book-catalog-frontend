export interface IBook {
  _id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  publication_date: string;
  review: string;
  status: boolean;
  bookStructure: string;
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
