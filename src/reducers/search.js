import { createActions, handleActions } from "redux-actions";

const actionCreators = createActions({
  SEARCH: {
    SEARCH_REQUEST: id => id,
    SEARCH_SUCCESS: result => [...result],
    SEARCH_ERROR: error => error
  }
});

const requestSearch = actionCreators.search.searchRequest;
const successSearch = actionCreators.search.searchSuccess;
const errorSearch = actionCreators.search.searchError;

const search = handleActions(
  {
    [requestSearch]: (state, action) => ({
      isFetching: true,
      result: [...state.result]
    }),

    [successSearch]: (state, action) => ({
      isFetching: false,
      result: [...action.payload]
    }),

    [errorSearch]: (state, action) => ({
      isFetching: false,
      error: action.error,
      result: [...state.result]
    })
  },
  { isFetching: false, result: [] }
);

export { search, requestSearch, successSearch, errorSearch };
