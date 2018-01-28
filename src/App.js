import React from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

export default class App extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    steps: [
      { number: 1, title: "Personal information" },
      { number: 2, title: "Card information" },
      { number: 3, title: "Finish" }
    ]
  };

  handleTabClick = step => {
    console.log(step);
    // При вызове с аргументом меняется state.step на значение аргумента
    this.setState({
      step: step
    });
  };
  handleChangeForm = (name, value) => {
    // state[первый аргумент] = второй аргумент
    this.setState({
      [name]: value
    });
    this.isFormCommitable();
    console.log(this.state);
  };
  handleClickNextForm = event => {
    // После вызова state.step увеличивается на 1
    let { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  isFormCommitable() {
    switch (this.state.step) {
      case 1:
        if (
          this.state.firstName !== "" &&
          this.state.lastName !== "" &&
          this.state.email !== "" &&
          this.state.email.includes("@")
        ) {
          return true;
        }
        break;
      case 2:
        if (this.state.cardNumber.length === 16) {
          return true;
        }
        break;
      default:
        return false;
    }
  }
  isSelected(step) {
    if (this.state.step === step) {
      return true;
    }
    return false;
  }
  isClickable(step) {
    if (this.state.step >= step) {
      return true;
    }
    return false;
  }
  renderForm() {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
        break;
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeForm={this.handleChangeForm}
          />
        );
        break;
      case 3:
        return `Поздравляем!`;
        break;
      default:
        null;
    }
  }
  render() {
    const { steps } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {steps.map((step, i) => {
            return <Step
              key={step.number}
              number={step.number}
              onClick={this.handleTabClick}
              isSelected={this.isSelected(step.number)}
              isClickable={this.isClickable(step.number)}
            >
              {step.title}
            </Step>;
          })}
        </div>

        <div className="form-content">{this.renderForm()}</div>

        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
