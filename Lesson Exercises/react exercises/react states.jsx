import { Component } from "react";

export class App extends Component {
  /*
        Write a countdown timer.
        After 20 seconds, print the word "boom".
    */

  constructor(props) {
    super(props);
    this.state = {
      counter: 20
    };
  }

  componentDidMount() {
    this.countdown = setInterval(() => {
      this.setState({
        counter: this.state.counter - 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  render() {
    return <>{this.state.counter ? this.state.counter : <p>Boom💣</p>}</>;
  }
}

// link to codesandbox: https://codesandbox.io/s/ts-bootcamp-01-02-forked-k8nqz?file=/src/App.js
