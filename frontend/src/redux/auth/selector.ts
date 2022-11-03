import { createSelector } from "reselect";

import { RootState } from "../rootReducer";

const getStatus = (state: RootState) => state.auth.status;
const getData = (state: RootState) => state.auth.data;
const getAuth = (state: RootState) => state.auth;
const getAuthMe = (state: RootState) => Boolean(state.auth.data);

export const getStatusSelector = createSelector(getStatus, (status) => status);

export const getDataSelector = createSelector(getData, (data) => data);
export const getAuthSelector = createSelector(getAuth, (data) => data);
export const getAuthMeSelector = createSelector(getAuthMe, (data) => data);
