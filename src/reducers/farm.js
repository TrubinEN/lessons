import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { deleteArrayValueById } from "./helpers";

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      const orders = deleteArrayValueById(state.orders, action.payload.id);
      return { ...state, orders: [...orders] };
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};
