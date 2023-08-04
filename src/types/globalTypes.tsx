export interface IBook {
  _id: number;
  title: string;
  author: string;
  description: string;
  publication_date: string;
  review: string;
}

export interface IUser {
  email: string;
  password: string;
}
