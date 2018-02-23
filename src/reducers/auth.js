import { handleActions } from "redux-actions";
import { authorize, logout } from "../actions/auth";

// стейт по умолчанию
const defaultState = {
  isAuthorized: false
};

const auth = handleActions(
  {
    [authorize]: state => ({
      isAuthorized: true
    }),
    [logout]: state => ({
      isAuthorized: false
    })
  },
  defaultState
);

const getIsAuthorized = state => state.auth.isAuthorized;

export { auth, getIsAuthorized };
