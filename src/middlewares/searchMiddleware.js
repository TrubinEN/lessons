import { search } from "../api";
import { errorSearch, successSearch, requestSearch } from "../reducers/search";

const searchMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === requestSearch.toString()) {
    search(action.payload).then(value => {
      if (value) {
        store.dispatch(successSearch(value));
      } else {
        store.dispatch(errorSearch(value));
      }
    });
  }

  return result;
};

export default searchMiddleware;
