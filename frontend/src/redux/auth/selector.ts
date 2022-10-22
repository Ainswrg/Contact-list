import { createSelector } from "reselect";

import { RootState } from "../rootReducer";

const getStatus = (state: RootState) => state.auth.status;
const getData = (state: RootState) => state.auth.data;

export const getStatusSelector = createSelector(getStatus, (status) => status);

export const getDataSelector = createSelector(getData, (data) => data);
