import { combineReducers } from "redux";
import budget from "./budget";
import farm from "./farm";
import market from "./market";

const reducerApp = combineReducers({
  budget,
  farm,
  market
});

export default reducerApp;
