import { AuthType, Payload, TUser } from "./types";

interface IReturn {
  type: AuthType;
  payload: Payload | string;
}

export const loginRequest = (payload: TUser): IReturn => ({
  type: AuthType.LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: TUser): IReturn => ({
  type: AuthType.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: { error: string }): IReturn => ({
  type: AuthType.LOGIN_FAILURE,
  payload,
});

export const logout = () => ({
  type: AuthType.LOGOUT,
});

export const signupRequest = (payload: TUser): IReturn => ({
  type: AuthType.SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (payload: TUser): IReturn => ({
  type: AuthType.SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (payload: { error: string }): IReturn => ({
  type: AuthType.SIGNUP_FAILURE,
  payload,
});

export const authRequest = (): Pick<IReturn, "type"> => ({
  type: AuthType.AUTH_REQUEST,
});

export const authSuccess = (payload: TUser): IReturn => ({
  type: AuthType.AUTH_SUCCESS,
  payload,
});

export const authFailure = (payload: { error: string }): IReturn => ({
  type: AuthType.AUTH_FAILURE,
  payload,
});
