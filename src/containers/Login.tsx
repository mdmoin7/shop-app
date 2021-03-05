import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Column from "../components/Column";
import Textbox from "../components/Textbox";
import UserService from "../services/UserService";
import UserActions from "../store/actions/UserActions";
import { StoreType } from "../types";
import { Redirect } from "react-router-dom";

type LoginProps = {
  signinSuccess: (user: object) => void;
  signinError: (error: string) => void;
  isAuthenticated: boolean;
};
type LoginState = { email: string; password: string };

class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = { email: "", password: "" };
  async doLogin(ev: SyntheticEvent) {
    ev.preventDefault();
    try {
      const { email, password } = this.state;
      const response = await UserService.login(email, password);
      console.log("success", response.data); // success
      this.props.signinSuccess(response.data); // create/store session
      // logical redirection
    } catch (e) {
      console.log("error", e.response.data); // error
      this.props.signinError(e.response.data.error.message);
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className="row">
        <Column colSize={12}>
          <form onSubmit={(ev) => this.doLogin(ev)}>
            <Textbox
              label="Email"
              type="text"
              valueChange={(email) => this.setState({ email })}
            />
            <Textbox
              label="Password"
              type="password"
              valueChange={(password) => this.setState({ password })}
            />
            <button type="submit" className="btn btn-sm btn-success">
              Login
            </button>
          </form>
        </Column>
      </div>
    );
  }
}
const mapStoreDataToProps = (storeData: StoreType) => {
  return {
    isAuthenticated: !!storeData.userSession.user,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signinSuccess: (user: object) => dispatch(UserActions.loginSuccess(user)),
    signinError: (err: string) => dispatch(UserActions.loginError(err)),
  };
};
export default connect(mapStoreDataToProps, mapDispatchToProps)(Login);
