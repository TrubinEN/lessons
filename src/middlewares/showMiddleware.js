import { show } from "../api";
import { fetchShowSuccess, fetchShowError } from "../actions/showActions";
import { SHOW_REQUEST } from "../actions/showTypes";

const showMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === SHOW_REQUEST) {
    show(action.payload).then(value => {
      if (value) {
        store.dispatch(fetchShowSuccess(value));
      } else {
        store.dispatch(fetchShowError(value));
      }
    });
  }

  return result;
};

export default showMiddleware;
