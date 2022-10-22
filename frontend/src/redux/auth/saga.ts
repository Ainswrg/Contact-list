import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  signupFailure,
  signupSuccess,
} from "./actions";

import { AuthType, Request, TUser } from "./types";

const login = async (payload: TUser) => {
  const { data } = await axios.post<Pick<TUser, "fullName" | "passwordHash">>(
    Request.LOGIN,
    { email: payload.email, passwordHash: payload.passwordHash },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

const signup = async (payload: TUser) => {
  const data = await axios.post<TUser>(Request.SIGNUP, payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};

function* loginSaga(action: any) {
  try {
    const response: { data: TUser } = yield call(login, action);
    yield put(loginSuccess(response.data));
    action.payload.callback(response.data);
  } catch (e: any) {
    yield put(loginFailure({ error: e.message }));
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

function* authSaga() {
  yield all([takeLatest(AuthType.LOGIN_REQUEST, loginSaga)]);
  yield all([takeLatest(AuthType.SIGNUP_REQUEST, signupSaga)]);
}

export default authSaga;
