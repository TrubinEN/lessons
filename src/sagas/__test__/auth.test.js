import { authFlow } from "../auth";
import { authorize, logout } from "../../actions/auth";
import { select, put, call, take } from "redux-saga/effects";
import { getIsAuthorized } from "../../reducers/auth";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from "../../localStorage";
import { setTokenApi, clearTokenApi } from "../../api";

describe("Сага authFlow", () => {
  const saga = authFlow();
  const token = 1234567890;

  describe("Сценарий без токена авторизации в localstorage", () => {
    it("выполняется select(getIsAuthorized)", () => {
      expect(saga.next().value).toEqual(select(getIsAuthorized));
    });

    it("выполняется call(getTokenFromLocalStorage)", () => {
      expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
    });

    it("выполняется take(authorize)", () => {
      expect(saga.next().value).toEqual(take(authorize));
    });

    it("выполняется call(setTokenApi, token)", () => {
      expect(saga.next({ payload: token }).value).toEqual(
        call(setTokenApi, token)
      );
    });

    it("выполняется call(setTokenToLocalStorage, token)", () => {
      expect(saga.next().value).toEqual(call(setTokenToLocalStorage, token));
    });

    it("выполняется take(logout)", () => {
      expect(saga.next().value).toEqual(take(logout));
    });

    it("выполняется call(removeTokenFromLocalStorage)", () => {
      expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
    });

    it("выполняется call(clearTokenApi)", () => {
      expect(saga.next().value).toEqual(call(clearTokenApi));
    });
  });

  describe("Сценарий c токеном авторизации из localstorage", () => {
    it("выполняется select(getIsAuthorized)", () => {
      expect(saga.next().value).toEqual(select(getIsAuthorized));
    });

    it("выполняется call(getTokenFromLocalStorage)", () => {
      expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
    });

    it("выполняется put(authorize())", () => {
      expect(saga.next({ payload: token }).value).toEqual(put(authorize()));
    });

    it("выполняется call(setTokenApi, token )", () => {
      expect(saga.next({ payload: token }).value).toEqual(
        call(setTokenApi, { payload: token })
      );
    });

    it("выполняется setTokenToLocalStorage, token)", () => {
      expect(saga.next().value).toEqual(
        call(setTokenToLocalStorage, { payload: token })
      );
    });

    it("выполняется take(logout)", () => {
      expect(saga.next().value).toEqual(take(logout));
    });

    it("выполняется call(removeTokenFromLocalStorage)", () => {
      expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
    });

    it("выполняется call(clearTokenApi)", () => {
      expect(saga.next().value).toEqual(call(clearTokenApi));
    });
  });
});
