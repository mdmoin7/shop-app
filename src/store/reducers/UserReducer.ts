import { Action } from "redux";
import UserActions from "../actions/UserActions";

interface IAction extends Action {
  user?: object;
  error?: string;
}
const initialState = { user: null, error: null };
function userReducer(storeData = initialState, action: IAction) {
  switch (action.type) {
    case UserActions.ActionTypes.SIGN_IN_SUCCESS:
      return { error: null, user: action.user };
    case UserActions.ActionTypes.SIGN_IN_ERROR:
      return { user: null, error: action.error };
    case UserActions.ActionTypes.SIGN_OUT:
      return initialState;
    default:
      return storeData;
  }
}
export default userReducer;
