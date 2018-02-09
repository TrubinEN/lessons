import { show } from "../api";
import { requestShow, errorShow, successShow } from "../reducers/shows";

const showMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === requestShow.toString()) {
    show(action.payload)
      .then(value => {
        store.dispatch(successShow(value));
      })
      .catch(error => {
        store.dispatch(errorShow(error));
      });
  }

  return result;
};

export default showMiddleware;
