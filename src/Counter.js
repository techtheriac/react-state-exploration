import React, { Component } from 'react';

// state and props are received from `setState`
const increment = (state, props) => {
  const { max, step } = props;
  if (state.count >= max) return;
  return { count: state.count + step };
};

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   if (storage) return JSON.parse(storage);
//   return { count: 0 };
// };

const setLocalStorageState = (state) => {
  const storage = JSON.stringify(state);
  if (storage) localStorage.setItem('counterState', storage);
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    // additionally, within `setState`, props can be accessed
    // the increment logic has been extracted and mede into a self
    // contained logic (DRY)

    // `setState` takes a second argument.
    // a callback that is executed after the state has been updated
    this.setState(increment, setLocalStorageState);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }
  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
