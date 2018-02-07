import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { deleteArrayValueById } from "./helpers";

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_FARM:
      const orders = deleteArrayValueById(state.orders, action.payload.id);
      return { ...state, orders: [...orders] };
    default:
      return state;
  }
};
