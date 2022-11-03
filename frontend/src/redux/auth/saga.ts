import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  authFailure,
  authSuccess,
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from "./actions";
import axios from "../../axios";

import { AuthType, Request, TUser } from "./types";
import { setTokenLocalStorage } from "../../utils";

interface Params {
  type: string;
  payload: { fullName?: string; email: string; password: string };
}

interface IResponse {
  createdAt: string;
  email: string;
  fullName: string;
  token: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const login = async (params: Params) => {
  const { data } = await axios.post<Pick<TUser, "email" | "password">>(
    Request.LOGIN,
    { email: params.payload.email, password: params.payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

const signup = async (params: Params) => {
  console.log("params: ", params);
  const data = await axios.post<TUser>(
    Request.SIGNUP,
    {
      fullName: params.payload.fullName,
      email: params.payload.email,
      password: params.payload.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  console.log("data: ", data);
  return data;
};

const authMe = async (params: Params) => {
  console.log("params: ", params);
  const data = await axios.post<TUser>(Request.GET_ME, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log("data: ", data);
  return data;
};

function* loginSaga(action: any) {
  try {
    const response: IResponse = yield call(login, action);
    console.log("response", response);
    if (response?.token !== undefined) {
      setTokenLocalStorage(response.token);
    }
    yield put(loginSuccess(response));
    // action.payload.callback(response.data);
  } catch (e: any) {
    yield put(loginFailure({ error: e }));
  }
}

function* signupSaga(action: any) {
  try {
    const response: { data: TUser } = yield call(signup, action);
    yield put(signupSuccess(response.data));
  } catch (e: any) {
    yield put(signupFailure({ error: e.message }));
  }
}

function* authMeSaga(action: any) {
  try {
    const response: { data: TUser } = yield call(authMe, action);
    yield put(authSuccess(response.data));
  } catch (e: any) {
    yield put(authFailure({ error: e.message }));
  }
}

function* authSaga() {
  yield all([takeLatest(AuthType.LOGIN_REQUEST, loginSaga)]);
  yield all([takeLatest(AuthType.SIGNUP_REQUEST, signupSaga)]);
  // yield all([takeLatest(AuthType.AUTH_REQUEST, authMeSaga)]);
}

export default authSaga;
