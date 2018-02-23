import { users } from "../users";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../../actions/users";

describe("Тест редьюсера users", () => {
  // демо данные
  const user = {
    login: "testName",
    followers: 98,
    public_repos: 12,
    avatar_url: "/img/photo.png"
  };
  const error = new Error("Текст ошибки!");

  const request = users(undefined, {
    type: fetchUserRequest.toString()
  });

  const success = users(undefined, {
    type: fetchUserSuccess.toString(),
    payload: user
  });

  const failure = users(undefined, {
    type: fetchUserFailure.toString(),
    payload: error
  });

  // тестирование
  it("изменяют флаг isFetching", () => {
    expect(request.isFetching).toBeTruthy();
    expect(success.isFetching).toBeFalsy();
    expect(failure.isFetching).toBeFalsy();
  });

  it("очищают поле data, если приходит экшен fetchUserRequest", () => {
    expect(request.data).toBeNull();
  });

  it("наполняют данными data, если приходит экшен fetchUserSuccess", () => {
    expect(success.data).toEqual(user);
  });

  it("очищают поле error, если приходит экшен fetchUserRequest или fetchUserSuccess", () => {
    expect(request.error).toBeNull();
    expect(success.error).toBeNull();
  });

  it("наполняют данными error, если приходит экшен fetchUserFailure", () => {
    expect(failure.error).toEqual(error);
  });
});
