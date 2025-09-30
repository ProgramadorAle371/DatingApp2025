export type User = {
  username: string;
  displayName: string;
  email: string;
  token: string;
  image?: string;
}

export interface IUser {
  username: string;
  displayName: string;
  email: string;
  token: string;
  image?: string;
}

export type LoginCreds = {
  email: string;
  password: string;
}

