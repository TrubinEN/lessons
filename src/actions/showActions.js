import { SHOW_REQUEST, SHOW_SUCCESS, SHOW_ERROR } from "./showTypes";

export const fetchShowRequest = payload => ({
  type: SHOW_REQUEST,
  payload
});

export const fetchShowSuccess = payload => ({
  type: SHOW_SUCCESS,
  payload
});

export const fetchShowError = error => ({
  type: SHOW_ERROR,
  error
});
