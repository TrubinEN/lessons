import { followers } from "../followers";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../../actions/followers";

describe("Тест редьюсера users", () => {
  // демо данные
  const ids = [{ login: "testName1" }, { login: "testName2" }];
  const error = new Error("Текст ошибки!");

  const success = followers(undefined, {
    type: fetchFollowersSuccess.toString(),
    payload: ids
  });

  const failure = followers(undefined, {
    type: fetchFollowersFailure.toString(),
    payload: error
  });

  const request = followers(undefined, {
    type: fetchFollowersRequest.toString()
  });

  // тестирование
  it("изменяют флаг isFetching", () => {
    expect(request.isFetching).toBeTruthy();
    expect(success.isFetching).toBeFalsy();
    expect(failure.isFetching).toBeFalsy();
  });

  it("очищают поле ids, если приходит экшен fetchFollowersRequest", () => {
    expect(request.ids).toEqual([]);
  });

  it("наполняют данными ids, если приходит экшен fetchFollowersSuccess", () => {
    expect(success.ids).toEqual(ids);
  });

  it("очищают поле error, если приходит экшен fetchFollowersRequest или fetchFollowersSuccess", () => {
    expect(request.error).toBeNull();
    expect(success.error).toBeNull();
  });

  it("наполняют данными error, если приходит экшен fetchFollowersFailure", () => {
    expect(failure.error).toEqual(error);
  });
});
