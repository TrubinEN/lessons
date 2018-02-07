import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from "../actions/searchTypes";

export default (state = { result: [], isFetching: false, error: false }, action) => {
  //console.log(state, action);
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        isFetching: true,
        result: [...state.result]
      };
    case SEARCH_SUCCESS:
      return {
        isFetching: false,
        result: [...action.payload]
      };
    case SEARCH_ERROR:
      return {
        isFetching: false,
        error: action.error,
        result: [...state.result]
      };
    default:
      return state;
  }
};
