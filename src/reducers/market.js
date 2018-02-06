import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { deleteArrayValueById } from "./helpers";

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return Object.assign({}, state, {
        orders: [...state.orders, action.payload]
      });
    case MOVE_ORDER_TO_FARM:
      return Object.assign({}, state, {
        orders: deleteArrayValueById(state.orders, action.payload.id)
      });
    default:
      return state;
  }
};
