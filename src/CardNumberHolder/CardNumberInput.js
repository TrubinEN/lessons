import React, { Component } from "react";

export default class CardNumberInput extends Component {
  static displayName = "Card Number Input";
  constructor(props) {
    super(props);

    this.state = {
      number: this.format(props.cardNumber)
    };
  }
  componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;
    this.setState({
      number: this.format(cardNumber)
    });
  }
  format(str) {
    if (str) {
      return `${str}`
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
    return "";
  }
  normalize(str) {
    if (str) {
      return `${str}`.replace(/\s/g, "");
    }
    return "";
  }
  handleChangeInput = event => {
    const { value } = event.target;
    this.props.onChange(this.normalize(value));
  };
  render() {
    let { number } = this.state;
    return <input value={number} onChange={this.handleChangeInput} />;
  }
}
