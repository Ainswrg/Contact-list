import { AuthType, Payload, TUser } from "./types";

interface IReturn {
  type: AuthType;
  payload: Payload | string;
}

export const loginRequest = (): Pick<IReturn, "type"> => ({
  type: AuthType.LOGIN_REQUEST,
});

export const loginSuccess = (payload: TUser): IReturn => ({
  type: AuthType.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: { error: string }): IReturn => ({
  type: AuthType.LOGIN_FAILURE,
  payload,
});

export const signupRequest = (): Pick<IReturn, "type"> => ({
  type: AuthType.SIGNUP_REQUEST,
});

export const signupSuccess = (payload: TUser): IReturn => ({
  type: AuthType.SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (payload: { error: string }): IReturn => ({
  type: AuthType.SIGNUP_FAILURE,
  payload,
});
