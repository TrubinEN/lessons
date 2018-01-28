import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: ""
  };
  handleClickNextForm = event => {
    return true;
  };
  handleTabClick = event => {
    // При вызове с аргументом меняется state.step на значение аргумента
  };
  handleChangeForm = (oneArg, TwoArg) => {
    // state[первый аргумент] = второй аргумент
  };
  handleClickNextForm = event => {
    // После вызова state.step увеличивается на 1
  }
  render() {
    return (
      <div className="container tab-panel">
        <div className="form-content" />
        <div className="button-panel">
          <button
            className="button button-next"
            onClick={this.handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
