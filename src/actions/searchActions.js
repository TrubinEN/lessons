import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from "./searchTypes";

export const fetchSearchRequest = payload => ({
  type: SEARCH_REQUEST,
  payload
});

export const fetchSearchSuccess = payload => ({
  type: SEARCH_SUCCESS,
  payload
});

export const fetchSearchError = error => ({
  type: SEARCH_ERROR,
  error
});
