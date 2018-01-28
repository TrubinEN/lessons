import React from "react";
import "./PersonalForm.css";

export default class PersonalForm extends React.Component {
  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
  render() {
    const { firstName, lastName, email } = this.props;
    return (
      <div className="personal-form">
        <input
          name="firstName"
          onChange={this.handleChangeForm}
          placeholder="First name"
          value={firstName}
        />
        <input
          name="lastName"
          onChange={this.handleChangeForm}
          placeholder="Last name"
          value={lastName}
        />
        <input
          name="email"
          onChange={this.handleChangeForm}
          placeholder="Email"
          value={email}
        />
      </div>
    );
  }
}
