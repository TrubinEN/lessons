import { handleActions, createActions } from "redux-actions";

const actionCreators = createActions({
  SHOW: {
    SHOW_REQUEST: id => id,
    SHOW_SUCCESS: film => film,
    SHOW_ERROR: error => error
  }
});

const requestShow = actionCreators.show.showRequest;
const successShow = actionCreators.show.showSuccess;
const errorShow = actionCreators.show.showError;

const shows = handleActions(
  {
    [requestShow]: (state, action) => ({
      isFetching: true,
      film: state.film
    }),
    [successShow]: (state, action) => ({
      isFetching: false,
      film: action.payload
    }),
    [errorShow]: (state, action) => ({
      isFetching: false,
      error: action.error,
      film: state.film
    })
  },
  {
    film: [],
    isFetching: false,
    error: false
  }
);

export { shows, requestShow, successShow, errorShow };
