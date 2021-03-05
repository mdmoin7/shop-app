import React from "react";
import Column from "../components/Column";
type DState = { no: number; count: number };
type DProps = {};
class Demo extends React.Component<DProps, DState> {
  state: DState = { no: 0, count: 0 };
  shouldComponentUpdate(nextProps: DProps, nextState: DState) {
    // return boolean
    console.log("SHOULD COMPONENT UPDATE", this.state, nextState);
    return this.state.no !== nextState.no || nextState.count === 6;
  }
  render() {
    console.log("RENDER CALLED", this.state);
    return (
      <div className="row">
        <Column colSize={12}>
          <p>No : {this.state.no}</p>
          {this.state.count > 5 ? <p>Hello from React</p> : null}
          <button onClick={() => this.setState({ no: 1 })}>Change to 1</button>
          <button onClick={() => this.setState({ no: 0 })}>Change to 0</button>
          <button
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count + 1 }))
            }
          >
            Increment the count by 1
          </button>
        </Column>
      </div>
    );
  }
}
export default Demo;
