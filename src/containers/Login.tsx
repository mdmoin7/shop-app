import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Column from "../components/Column";
import Textbox from "../components/Textbox";
import UserService from "../services/UserService";
import { StoreType } from "../types";

type LoginProps = {};
type LoginState = { email: string; password: string };

class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = { email: "", password: "" };
  async doLogin(ev: SyntheticEvent) {
    ev.preventDefault();
    try {
      const { email, password } = this.state;
      const response = await UserService.login(email, password);
      console.log("success", response.data); // success
    } catch (e) {
      console.log("error", e.response.data); // error
    }
  }

  render() {
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
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};
export default connect(mapStoreDataToProps, mapDispatchToProps)(Login);
