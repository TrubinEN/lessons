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
    this.setState({ step });
  };
  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    });
  };
  handleClickNextForm = () => {
    let { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  isFormCommitable() {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    if (step === 1) {
      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        email.includes("@")
      )
        return true;
    }

    if (step === 2) {
      if (cardNumber.length === 16) return true;
    }

    return false;
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
    const { step } = this.state;

    if (step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    if (step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    if (step === 3) {
      return `Поздравляем!`;
    }

    return null;
  }
  render() {
    const { steps } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          {steps.map(step => {
            return (
              <Step
                key={step.number}
                number={step.number}
                onClick={this.handleTabClick}
                isSelected={this.isSelected(step.number)}
                isClickable={this.isClickable(step.number)}
              >
                {step.title}
              </Step>
            );
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
