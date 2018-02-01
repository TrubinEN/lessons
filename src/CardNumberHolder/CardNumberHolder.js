import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

export default class CardNumberHolder extends Component {
  static displayName = "Card number formating";
  state = {
    cardNumber: ""
  };
  handleChange = value => {
    this.setState({ cardNumber: value });
  };
  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}
