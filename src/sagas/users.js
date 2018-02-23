import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest
} from "../actions/users";
import { getUserInformation, getTokenOwner } from "../api";
import requestFlow from "./request";
import { getTokenFromLocalStorage } from "../localStorage";

export function* fetchUserSaga(action) {
  try {
    let response;

    if (fetchTokenOwnerRequest.toString() === action.type) {
      const token = getTokenFromLocalStorage();
      const defaultProfile = yield call(requestFlow, getTokenOwner, token);
      response = yield call(
        requestFlow,
        getUserInformation,
        defaultProfile.data.login
      );
    } else {
      response = yield call(requestFlow, getUserInformation, action.payload);
    }

    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest([fetchUserRequest, fetchTokenOwnerRequest], fetchUserSaga);
}
