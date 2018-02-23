import { put } from "redux-saga/effects";
import {
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../../actions/followers";
import { fetchFollowersSaga } from "../followers";

describe("Сага followers", () => {
  it("срабатывает экшен fetchUserSuccess", () => {
    const saga = fetchFollowersSaga({ payload: "testName" });
    saga.next();
    const result = { data: { id: 123, name: "testName" } };
    expect(saga.next(result).value).toEqual(
      put(fetchFollowersSuccess(result.data))
    );
  });

  it("срабатывает экшен fetchUserFailure", () => {
    const error = new Error("Бах, произошла ошибка!");
    const saga = fetchFollowersSaga({ payload: "testName" });
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchFollowersFailure(error)));
  });
});
