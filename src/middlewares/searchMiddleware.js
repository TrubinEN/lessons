import { search } from "../api";
import { fetchSearchSuccess, fetchSearchError } from "../actions/searchActions";

import { SEARCH_REQUEST } from "../actions/searchTypes";

const searchMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === SEARCH_REQUEST) {
    search(action.payload).then(value => {
      if (value) {
        store.dispatch(fetchSearchSuccess(value));
      } else {
        store.dispatch(fetchSearchError(value));
      }
    });
  }

  return result;
};

export default searchMiddleware;
