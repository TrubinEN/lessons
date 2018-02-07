import { SHOW_REQUEST, SHOW_SUCCESS, SHOW_ERROR } from "../actions/showTypes";

export default (state = { film: [], isFetching: false, error: false }, action) => {
  //console.log(state, action);
  switch (action.type) {
    case SHOW_REQUEST:
      return {
        isFetching: true,
        film: state.film
      };
    case SHOW_SUCCESS:
      return {
        isFetching: false,
        film: action.payload
      };
    case SHOW_ERROR:
      return {
        isFetching: false,
        error: action.error,
        film: state.film
      };
    default:
      return state;
  }
};
