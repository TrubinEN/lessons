import React, { Component } from "react";
import { authorizeUser, isAuthorized } from "./AuthorizeApi";
import Redirect from "react-router-dom/Redirect";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    isAuthorized: isAuthorized
  };
  handleSubmit = () => {
    const { email, password } = this.state;
    const authorize = authorizeUser(email, password);
    this.setState({
      error: !authorize,
      isAuthorized: authorize
    });
  };
  handleChangeInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { email, password, error, isAuthorized } = this.state;
    return (
      <div>
        {isAuthorized ? <Redirect from="/" to="/" /> : null}
        <div>
          <input
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChangeInput}
          />
          <input
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChangeInput}
          />
        </div>
        {error ? <p className="error">Неверный пароль и/или почта.</p> : null}
        <button onClick={this.handleSubmit}>Войти</button>
      </div>
    );
  }
}

export default Auth;
