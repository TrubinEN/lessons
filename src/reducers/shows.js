import { handleActions, createActions } from "redux-actions";

const actionCreators = createActions({
  SHOW_REQUEST: id => id,
  SHOW_SUCCESS: film => film,
  SHOW_ERROR: error => error
});

const requestShow = actionCreators.showRequest;
const successShow = actionCreators.showSuccess;
const errorShow = actionCreators.showError;

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

const getIsFetching = state => state.shows.isFetching;
const getFilm = state => state.shows.film;
const getError = state => state.shows.error;

export {
  shows,
  requestShow,
  successShow,
  errorShow,
  getIsFetching,
  getError,
  getFilm
};
