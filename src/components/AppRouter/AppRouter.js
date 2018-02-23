import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AuthPage from "../AuthPage/AuthPage";
import { logout } from "../../actions/auth";
import UserPage from "../UserPage/UserPage";
import { getIsAuthorized } from "../../reducers/auth";
import { getNetworkError } from "../../reducers/network";

export class AppRouter extends Component {
  handleLogout = () => {
    const { logout } = this.props;

    if (typeof logout === "function") {
      logout();
    }
  };

  render() {
    const { isAuthorized, networkError } = this.props;
    if (networkError) {
      return <div className="error-network">Ошибка: {networkError}</div>;
    }

    return (
      <div>
        {isAuthorized && (
          <div className="page-header">
            <button className="logout-button" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        )}
        <Switch>
          <PrivateRoute path="/user/me" exact component={UserPage} isAuthorized={isAuthorized}/>
          <PrivateRoute path="/user/:name" component={UserPage}  isAuthorized={isAuthorized}/>
          {!isAuthorized && <Route path="/login" exact component={AuthPage} />}
          <Redirect to="/user/me" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  networkError: getNetworkError(state)
});

const mapDispathToProps = {
  logout
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(AppRouter)
);
