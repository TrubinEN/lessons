import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./Follower.css";

export default class Follower extends PureComponent {
  render() {
    const { login, avatar } = this.props;
    return (
      <div className="userItem">
        <div>
          <img src={avatar} alt={login} />
        </div>
        <div>
          <Link to={`/user/${login}`}>
            <h3>{login}</h3>
          </Link>
        </div>
      </div>
    );
  }
}
