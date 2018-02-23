import { handleActions } from "redux-actions";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/users";
import { logout } from "../actions/auth";

// стейт по умолчанию
const defaultState = {
  data: null,
  error: null,
  isFetched: false,
  isFetching: false
};

const users = handleActions(
  {
    [fetchUserRequest]: (state, action) => ({
      ...state,
      data: null,
      isFetching: true,
      isFetched: false,
      error: null
    }),

    [fetchUserSuccess]: (state, action) => ({
      ...state,
      data: action.payload,
      isFetching: false,
      isFetched: true,
      error: null
    }),

    [fetchUserFailure]: (state, action) => ({
      ...state,
      data: null,
      isFetching: false,
      isFetched: true,
      error: action.payload
    }),

    [logout]: state => ({
      ...state,
      ...defaultState
    })
  },
  defaultState
);

const getData = state => state.users.data;
const getIsFetching = state => state.users.isFetching;
const getIsFetched = state => state.users.isFetched;
const getError = state => state.users.error;

export { users, getData, getIsFetching, getIsFetched, getError };
