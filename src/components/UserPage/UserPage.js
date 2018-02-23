import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "react-svg-spinner";
import Followers from "../Followers";
import { fetchUserRequest, fetchTokenOwnerRequest } from "../../actions/users";
import { getData, getIsFetched, getIsFetching } from "../../reducers/users";
import "./UserPage.css";

export const ErrorNotUser = () => <p>Пользователь не найден!</p>;

export class UserPage extends Component {
  static defaultProps = {
    user: null,
    isFetching: false,
    isFetched: false
  };

  componentWillReceiveProps(nextProps) {
    const {
      match: { params: { name: oldlogin } },
      fetchUserRequest
    } = this.props;
    const { match: { params: { name: newLogin } } } = nextProps;

    if (newLogin !== oldlogin) {
      fetchUserRequest(newLogin);
    }
  }

  componentDidMount() {
    const { fetchUserRequest, fetchTokenOwnerRequest } = this.props;
    const { match: { params: { name } } } = this.props;
    const searchName = name ? name : "me";

    if (searchName === "me") {
      fetchTokenOwnerRequest();
    } else {
      fetchUserRequest(searchName);
    }
  }

  render() {
    const { isFetched, user } = this.props;
    // прелоадер
    if (isFetched !== true) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }

    // ошибка если нет пользователя
    if (user === null) {
      return <ErrorNotUser />;
    }

    // основная верстка
    return (
      <div className="user">
        <div className="user-profile">
          <div className="user-profile-avatar">
            <img src={user.avatar_url} alt="Аватар" />
          </div>
          <div className="user-profile-info">
            <h3>{user.login}</h3>
            <p className="user-profile-info-followers">
              Followers: {user.followers}
            </p>
            <p className="user-profile-info-repos">
              Public repos: {user.public_repos}
            </p>
          </div>
        </div>
        <div className="user-followers">
          <Followers login={user.login} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getData(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = {
  fetchUserRequest,
  fetchTokenOwnerRequest
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserPage)
);
