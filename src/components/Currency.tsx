import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import CurrencyActions from "../store/actions/CurrencyActions";

type CurrencyProps = {
  currencyChange: (code: string) => void;
  theme: string;
};

class Currency extends React.Component<CurrencyProps> {
  render() {
    const codes: string[] = ["INR", "USD", "CAD", "GBP", "EUR"];
    const { theme } = this.props;
    const color = theme === "light" ? "text-dark" : "text-white";
    return (
      <select
        onChange={(ev) => this.props.currencyChange(ev.target.value)}
        className={`form-control-sm bg-${theme} ${color}`}
      >
        {codes.map((val) => (
          <option key={val}>{val}</option>
        ))}
      </select>
    );
  }
}
// connect(what to fetch, what to modify)(component)
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // prop_name : dispatch(initiate_action)
    currencyChange: (c: string) => dispatch(CurrencyActions.updateCurrency(c)),
  };
};
export default connect(null, mapDispatchToProps)(Currency);
