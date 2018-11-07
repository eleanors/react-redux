import React from "react";
import { connect } from "react-redux";

const DemoComponent = props => (
  <div>
    <p>My demo component fueled by: {props.fuel}!</p>
    {props.state}
    <p onClick={props.increase}>+++</p>
    <p onClick={props.decrease}>---</p>
  </div>
);

const mapStateToProps = state => ({
  state: "connected to redux state..." + state.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increase: () => {
      dispatch({
        type: "INCREMENT",
        payload: {
          amount: 10
        }
      });
    },
    decrease: () => {
      dispatch({
        type: "DECREMENT",
        payload: {
          amount: -10
        }
      });
    }
  };
};

// create a version that only renders on prop changes
export const MemoizedDemoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DemoComponent));
