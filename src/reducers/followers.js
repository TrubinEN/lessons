import { handleActions } from "redux-actions";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/followers";
import { logout } from "../actions/auth";

// стейт по умолчанию
const defaultState = {
  ids: [],
  isFetched: false,
  isFetching: false,
  error: null
};

const followers = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
      ids: [],
      isFetching: true,
      isFetched: false,
      error: null
    }),

    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      ids: action.payload,
      isFetching: false,
      isFetched: true,
      error: null
    }),

    [fetchFollowersFailure]: (state, action) => ({
      ...state,
      ids: [],
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

const getIds = state => state.followers.ids;
const getIsFetching = state => state.followers.isFetching;
const getIsFetched = state => state.followers.isFetched;
const getError = state => state.followers.error;

export { followers, getIds, getIsFetched, getIsFetching, getError };
