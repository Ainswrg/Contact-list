/* eslint-disable @typescript-eslint/default-param-last */
import { combineReducers } from "redux";

import { AuthType, Status, TUser } from "./types";

export type TState = {
  data: TUser | null;
  status: Status;
};

const initialState: TState = {
  data: null,
  status: Status.LOADING,
};

interface Action<T> {
  type: AuthType;
  payload: T;
}

const authReducer = (state = initialState, action: Action<TUser>) => {
  switch (action.type) {
    case AuthType.SIGNUP_REQUEST:
      return {
        ...state,
        data: null,
        status: Status.LOADING,
      };
    case AuthType.SIGNUP_FAILURE:
      return {
        ...state,
        data: null,
        status: Status.ERROR,
      };
    case AuthType.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: Status.SUCCESS,
      };
    case AuthType.LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        status: Status.LOADING,
      };
    case AuthType.LOGIN_FAILURE:
      return {
        ...state,
        data: action.payload,
        status: Status.ERROR,
      };
    case AuthType.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: Status.SUCCESS,
      };
    default:
      return state;
  }
};

export default authReducer;
