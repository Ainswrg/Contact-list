export enum AuthType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
  SIGNUP_REQUEST = "SIGNUP_REQUEST",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAILURE = "SIGNUP_FAILURE",
  AUTH_REQUEST = "AUTH_REQUEST",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_FAILURE = "AUTH_FAILURE",
}

export const enum Status {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export const enum Request {
  LOGIN = "/auth/login",
  SIGNUP = "/auth/register",
  GET_ME = "/auth/me",
}

export type TUser = {
  password?: string;
  _id?: string;
  fullName?: string;
  email?: string;
  passwordHash?: string;
  avatarUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  error?: string;
};

export interface LoginFailure {
  error: string;
}

export type Payload = TUser | LoginFailure;
