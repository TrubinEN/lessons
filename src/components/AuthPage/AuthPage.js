import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authorize } from "../../actions/auth";
import { getIsAuthorized } from "../../reducers/auth";

class AuthPage extends Component {
  componentDidMount() {
    const { authorize } = this.props;
    document.onkeypress = function(event) {
      event = event || window.event;
      if (event.keyCode === 13) {
        localStorage.setItem("access_token", event.target.value);
        authorize(event.target.value);
      }
    };
  }
  render() {
    return (
      <div>
        <p>
          Получить токен нужно на своей странице github, перейдите по
          <a href="https://github.com/settings/tokens">адресу</a> и создать себе
          токен. Запишите куда нибудь токен, так как после создания доступ к
          нему будет только один раз.
        </p>
        <input placeholder="auth_token" onChange={this.handleChangeToken} />
        <p>После ввода нажать Enter</p>
      </div>
    );
  }
}

const mapStateToPropsAuth = state => ({
  isAuthorized: getIsAuthorized(state)
});

const mapDispatchToPropsAuth = { authorize };
export default withRouter(
  connect(mapStateToPropsAuth, mapDispatchToPropsAuth)(AuthPage)
);
