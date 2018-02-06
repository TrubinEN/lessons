import { MOVE_ORDER_TO_FARM, CREATE_ORDER } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";

export default (
  state = { deliveryExpanse: 0, profit: 0, farmExpanse: 0, marketExpanse: 0 },
  action
) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return Object.assign({}, state, {
        deliveryExpanse: state.deliveryExpanse + 20
      });
    case CREATE_ORDER:
      return Object.assign({}, state, {
        profit: state.profit + action.payload.price,
        marketExpanse: state.marketExpanse + 20
      });
    case MOVE_ORDER_TO_FARM:
      return Object.assign({}, state, {
        farmExpanse: state.farmExpanse + 100
      });
    default:
      return state;
  }
};
