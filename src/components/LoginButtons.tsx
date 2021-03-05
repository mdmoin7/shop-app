import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import UserActions from "../store/actions/UserActions";
import { StoreType } from "../types";

const LoginButtons: React.FC = (props) => {
  // const store = useStore<StoreType>();
  const auth = useSelector((store: StoreType) => !!store.userSession.user);
  const dispatch = useDispatch();
  const history = useHistory();
  if (auth) {
    return (
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => {
          dispatch(UserActions.logout());
          history.push("/"); // redirect
        }}
      >
        Logout
      </button>
    );
  }
  return (
    <Link className="btn btn-sm btn-outline-secondary" to={"/login"}>
      Login
    </Link>
  );
};
export default LoginButtons;
