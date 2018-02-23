import { call, put, select } from "redux-saga/effects";

import requestSaga from "../request";
import { fetchFollowersSuccess } from "../../actions/followers";
import { getIsNetworkErrorPresent } from "../../reducers/network";
import { clearNetworkErrors, networkError } from "../../actions/network";

describe("Сага request", () => {
  // демо данные
  const followers = [{ id: 1, name: "Bob" }];
  const saga = requestSaga(fetchFollowersSuccess, followers);
  const error = { response: { status: 401 } };

  // тестирование
  it("выполняется yield call(fn, args)", () => {
    expect(saga.next().value).toEqual(call(fetchFollowersSuccess, followers));
  });

  it("выполняется yield select(getIsNetworkErrorPresent)", () => {
    expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
  });

  it("выполняется put(clearNetworkErrors()", () => {
    expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
  });

  it("выполняется put(networkError(error)", () => {
    expect(saga.throw(error).value).toEqual(put(networkError(error)));
  });
});
