import React, { SyntheticEvent } from "react";

type CProps = {};
type CState = { name: string; nameTouched: boolean };

class Checkout extends React.Component<CProps, CState> {
  state = { name: "", nameTouched: false };
  emailInput: React.RefObject<HTMLInputElement>;

  constructor(props: CProps) {
    super(props);
    this.emailInput = React.createRef();
  }

  submitData(ev: SyntheticEvent) {
    ev.preventDefault(); // cancels the default event behavior
    console.log("form submit", this.state, this.emailInput.current?.value);
  }
  render() {
    // this.props.match.params : PATH PARAMS
    // this.props.location.search : QUERY PARAMS
    return (
      <div>
        <form onSubmit={(ev) => this.submitData(ev)}>
          <label>Name</label>
          {/* CONTROLLED COMPONENT */}
          <input
            type="text"
            onBlur={() => this.setState({ nameTouched: true })}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          {this.state.nameTouched && this.state.name === "" ? (
            <span>Name is required</span>
          ) : null}

          <label>Email</label>
          {/* UNCONTROLLED COMPONENT */}
          <input type="text" ref={this.emailInput} />

          {this.emailInput && this.emailInput.current?.value === "" ? (
            <span>Email is required</span>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Checkout;
