import React, { Component } from "react";
import "./App.css";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Public from "./Public";
import Private from "./Private";
import Redirect from "react-router-dom/Redirect";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/public">Публичная страница</Link>
            </li>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/public" component={Public} />
          {isAuthorized ? (
            <Route path="/private" component={Private} />
          ) : (
            <Redirect from="/private" to="/auth" />
          )}
          {isAuthorized ? <Redirect from="/auth" to="/" /> : null}
          <Route path="/auth" component={Auth} />
          <Redirect from="/private" to="/auth" />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
