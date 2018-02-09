import { search } from "../api";
import { errorSearch, successSearch, requestSearch } from "../reducers/search";

const searchMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === requestSearch.toString()) {
    search(action.payload)
      .then(value => {
        store.dispatch(successSearch(value));
      })
      .catch(error => {
        store.dispatch(errorSearch(error));
      });
  }

  return result;
};

export default searchMiddleware;
