import { fetchUserSuccess, fetchUserFailure } from "../../actions/users";
import { put } from "redux-saga/effects";
import { fetchUserSaga } from "../users";

describe("Сага users:", () => {
  it("срабатывает экшен fetchUserSuccess", () => {
    const responce = { data: { login: "testName" } };
    const saga = fetchUserSaga({ payload: "testName" });
    saga.next();
    expect(saga.next(responce).value).toEqual(
      put(fetchUserSuccess(responce.data))
    );
  });

  it("срабатывает экшен fetchUserFailure", () => {
    const error = new Error("Бах, произошла ошибка!");
    const saga = fetchUserSaga({ payload: "testName" });
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
  });
});
