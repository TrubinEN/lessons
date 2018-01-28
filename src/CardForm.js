import React from "react";
import "./CardForm.css";

export default class CardForm extends React.Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  }
  componentWillUnmount(){

  }
  render() {
    return (
      <div className="card-form">
        <input name="cardNumber" onChange={this.handleChangeForm} placeholder="0000000000000000"/>
      </div>
    );
  }
}
